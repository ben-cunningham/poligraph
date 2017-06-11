import psycopg2
import configparser
from urllib.parse import urlparse


class DatabaseManager():
    
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

    def get_edges(self, node):
        cur = self.conn.cursor()
        cur.execute(""" select * from edge where "to"=%s; """, (node, ))
        rows = [row for row in cur]
        cur.close()
        return rows

