from util.db_util import DatabaseUtil
from util.graph import Node, Graph

class Search():

    def __init__(self, src):
         self.src = Node(src)
         self.g = Graph()
         self.g.add_vertex(self.src)

    def bfs(self, dest):
         dest = Node(dest)
         path = []
         visited = set()
         queue = [self.src]
         
         while len(queue) > 0:
             node = queue.pop(0)
             if node == dest:
                 path.append(node)
                 return path

             self.get_edges(node) # get the neighboring nodes from the database and populate graph
             for v in self.g.get_adjacent_verticies(node):
                 if v not in visited:
                     queue.append(v)
                     visited.add(v)

    def get_edges(self, node):
        edges = DatabaseUtil().get_edges(node, self.g)

