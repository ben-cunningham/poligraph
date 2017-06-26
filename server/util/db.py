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
        cur.execute(""" 
            with x as 
                (select * from edge join vertex on edge.to=vertex.entity 
                    where edge.to=%s or edge.from=%s) 
            select * from x join vertex on x.from=vertex.entity; """, (node, node))
        rows = [row for row in cur]

        cur.close()
        return rows

    def search_verticies(self, query):
        cur = self.conn.cursor()
        cur.execute(""" select * from vertex where name~%s limit 10;""", (query,))
        rows = [row for row in cur]
        cur.close()
        return rows

