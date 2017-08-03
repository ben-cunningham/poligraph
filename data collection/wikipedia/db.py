import os.path
import psycopg2
import configparser
from urllib.parse import urlparse

from queries import Queries

class DB():
    
    def __init__(self):
        config = configparser.ConfigParser()
        config.read('config.ini')
        url = config.get('Database config', 'DATABASE_URL')
        url = urlparse(url)
    
        self.conn = psycopg2.connect(
            database=url.path[1:],
            user=url.username,
            password=url.password,
            host=url.hostname,
            port=url.port
        )
    
        # self.create_tables()
        self.conn.commit()
        # self.conn.close() 
    
    def create_tables(self):
        cur = self.conn.cursor()
        cur.execute(Queries.create_edge)
        cur.execute(Queries.create_vertex)
        cur.close()

    def insert_politician(self, entity, name, url):
        cur = self.conn.cursor()
        cur.execute(Queries.insert_politician, (entity, name, url, ))
        self.conn.commit()
        cur.close()

    def get_rows(self):
        cur = self.conn.cursor()
        cur.execute(Queries.fetch_rows)
        return cur # shouldn't return cur the only place here but it's temp...

    def get_edge(self, e1, e2):
        cur = self.conn.cursor()
        cur.execute(Queries.get_edge, (e1, e2))
        return [row for row in cur]

    def update_edge(self, e1, e2, s):
        cur = self.conn.cursor()
        cur.execute(Queries.update_edge, (s, e1, e2))
        self.conn.commit()
        cur.close()

    def get_entity(self, name):
        cur = self.conn.cursor()
        cur.execute(Queries.get_entity, (name, ))
        l = [row for row in cur]
        cur.close()
        return l

    def insert_edge(self, e1, e2, inf, cls):
        cur = self.conn.cursor()
        cur.execute(Queries.insert_connection, (e1, e2, inf))
        self.conn.commit()
        cur.close()
