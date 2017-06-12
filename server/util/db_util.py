from util.db import DatabaseManager
from util.graph import Node

class DatabaseUtil():
    """
    TODO: Make these static methods
    """
    def get_edges(self, src, graph):
        edges = DatabaseManager().get_edges(src.id_)
        for edge in edges:
            graph.add_connection(src, dest)
            
