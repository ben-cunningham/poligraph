from util.db import DatabaseManager
from util.graph import Graph, Node

class Connections():

    def __init__(self, src):
        self.g = Graph(src, self)

    def search(self, dest):
        return self.g.bfs(dest)

    def get_edges(self, src):
        edges = DatabaseManager().get_edges(src.id_)
        for edge in edges:
            self.g.add_connection(src, Node(edge[1]), edge[2])
