from util.db_util import DatabaseUtil
from util.graph import Node, Graph

class Search():

    def __init__(self, src):
         self.src = Node(src)
         self.g = Graph()
         self.g.add_vertex(self.src)

    def bfs(self, dest):
         dest = Node(dest)
         path = [self.src]
         if self.src == dest:
             return path

         queue = [self.src]
         while len(queue) > 0:
             node = queue.pop(0)
             self.get_edges(node)

    def get_edges(self, node):
        edges = DatabaseUtil().get_edges(node, self.g)

