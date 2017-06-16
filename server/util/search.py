from util.db_util import DatabaseUtil
from util.graph import Node, Graph

class Search():

    def __init__(self, src):
         self.src = Node(src)
         self.g = Graph()
         self.g.add_vertex(self.src)

    def bfs(self, dest):
         dest = Node(dest)
         path = [[self.src]]
         visited = set()

         while len(path) > 0:
             curr_path = path.pop(0)
             node = curr_path[-1]
             if node == dest:
                 return curr_path

             self.get_edges(node) # get the neighboring nodes from the database and populate graph
             for v in self.g.get_adjacent_verticies(node):
                 if v not in visited:
                     new_path = list(curr_path)
                     new_path.append(v)
                     path.append(new_path)
                     visited.add(v)

    def get_edges(self, node):
        edges = DatabaseUtil().get_edges(node, self.g)

