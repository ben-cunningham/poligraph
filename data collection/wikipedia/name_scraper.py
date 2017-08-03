from bs4 import BeautifulSoup
import grequests
import requests

import urllib
import re
import json

from db import DB

BASE_URL = 'https://en.wikipedia.org'
ENTITY_QUERY_URL = '/w/api.php?action=query&prop=pageprops&ppprop=wikibase_item&redirects=1&format=json&titles='
POLI_QUERY_URL = 'https://www.wikidata.org/w/api.php?action=wbgetclaims&format=json&property=P106'
WIKI_URL_21 = 'https://en.wikipedia.org/w/index.php?title=Category:21st-century_American_politicians'
WIKI_URL_20 = 'https://en.wikipedia.org/w/index.php?title=Category:20th-century_American_politicians'

urls= []
names = set()
db = DB()

def check_politician(response):
    try:
        response = json.loads(response)
    except:
        print "Could not load response for entitiy: " +response
        return False

    if 'claims' in response:
        if 'P106' in response['claims']:
            for d in response['claims']['P106']: 
                if 'mainsnak' in d:
                    if 'datavalue' in d['mainsnak']:
                        if 'value' in d['mainsnak']['datavalue']:
                            if 'id' in d['mainsnak']['datavalue']['value']:
                                if d['mainsnak']['datavalue']['value']['id'] == 'Q82955':
                                    return True
            
    return False

def get_entity_value(response):
    try:
        response = json.loads(response)
    except:
        print "Could not load json file for: " 
        return ""

    pages =  response['query']['pages']
    for val in pages:
        if 'pageprops' in pages[val]:
            return pages[val]['pageprops']['wikibase_item']

def get_history(page):
    pass

def scrape():
    
    while len(urls) > 0:
        title = urls.pop(0)
        while True:
            try:
                html = urllib.urlopen(BASE_URL + title).read()
            except:
                print 'Cannot reach url: ' +title
                continue
            break

        soup = BeautifulSoup(html, 'html.parser')
        name = soup.find('h1', {'id': 'firstHeading'}).getText()
        article_name = re.match(r'/wiki/(\w+)', title)

        if not article_name:
            return
            
        response = urllib.urlopen(BASE_URL +ENTITY_QUERY_URL +article_name.group(1)).read() 
        entity = get_entity_value(response)
        if entity:
            url = POLI_QUERY_URL + '&entity=' +entity
            response = urllib.urlopen(url).read()
            if check_politician(entity):
                db.insert_politician(entity, article_name.group(1), BASE_URL + title)

        content = soup.find('div', {'id': 'bodyContent'})
        
        atags = []
        for a in content.find_all('a'):
            href = a['href']
            name = re.match(r'/wiki/(\w+)', href)
            if name:
                atags.append((BASE_URL +ENTITY_QUERY_URL +name.group(1), name.group(1), ))
        
        rs = []
        print '****** start entitiy requests ********'
        for u in atags:
            rs.append(grequests.get(u[0], headers={'x-correlation-id': u[1]}))
        responses = grequests.map(rs)
        print '****** end requests ********'
        
        values = []
        for article in responses:
            if article is None:
                continue
            value = get_entity_value(article.text)
            if value == None or value in names:
                continue
            names.add(value)
            values.append((POLI_QUERY_URL + '&entity=' +value, article.request.headers['x-correlation-id'], ))

        print '****** start polititcal check requests ********'
        for u in values:
            rs.append(grequests.get(u[0], headers={'x-correlation-id': u[1]}))
        responses = grequests.map(rs)
        print '****** end requests ********'
        
        for val in responses:
            is_politician = check_politician(val.text)
            if is_politician:
                print article
                urls.append('/wiki/' +val.request.headers['x-correlation-id'])

if __name__ == '__main__':
    html = urllib.urlopen(WIKI_URL_21).read()
    soup = BeautifulSoup(html, 'html.parser')
    pages = soup.find('div', { 'id': 'mw-pages' })
    for group in pages.find_all('div', {'class': 'mw-category-group'}):
        for link in group.find_all('a'):
            urls.append(link['href'])
            scrape()
