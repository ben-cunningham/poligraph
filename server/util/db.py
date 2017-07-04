import psycopg2
import configparser
from urllib.parse import urlparse

class DatabaseManager():
    
    def __init__(self, engine):
        self.engine = engine

    def get_edges(self, node):
        cur = self.engine.connect()
        results = cur.execute(""" with x as 
                                    (select * from edge join vertex on edge.to=vertex.entity 
                                           where edge.to=%s or edge.from=%s) 
                                  select * from x join vertex on x.from=vertex.entity; """, (node, node))
        rows = [row for row in results]
        cur.close()
        return rows

    def search_verticies(self, query):
        cur = self.engine.connect()
        results = cur.execute(""" select * from vertex where name~%s limit 10;""", (query,))
        rows = [row for row in results]
        cur.close()
        return rows
    
    def get_entity(self, uid):
       cur = self.engine.connect()
       results = cur.execute(""" select * from vertex where entity=%s; """, (uid, ))
       rows = [row for row in results]
       cur.close()
       return rows[0] if len(rows) > 0 else []

