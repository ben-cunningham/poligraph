from util.db import DatabaseManager

class DatabaseUtil():
    
    def get_edges(self, src):
        edges = DatabaseManager().get_edges(src)
        print(len(edges))
