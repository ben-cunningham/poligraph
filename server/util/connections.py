from util.db import DatabaseManager
from util.graph import Graph, Node

class Connections():

    def __init__(self, db_man, src):
        self.g = Graph(src, self)
        self.db = db_man

    def search(self, dest):
        return self.g.bfs(dest)

    def get_path_with_context(self, path):
        response_path = []
        for i in range(0, len(path) - 1):
            for w, t in self.g.get_adjacent_verticies(path[i]):
                if path[i+1] == w:
                    obj = {
                        "from": {
                            "id": path[i].id_,
                            "name": path[i].name
                        },
                        "context": t,
                        "to": {
                            "id": w.id_,
                            "name": w.name
                        }
                    }

                    response_path.append(obj)
        return response_path

    def fetch_edges(self, src):
        edges = self.db.get_edges(src.id_)
        for edge in edges:
            src_node, dest_node = self.get_nodes_from_row(src, edge)
            self.g.add_connection(src_node, dest_node, edge[2])

    def get_nodes_from_row(self, src, row):
       node1 = Node(row[0], row[4])
       node2 = Node(row[1], row[7])
       if src.id_ == row[0]:
           return node1, node2
       else:
           return node2, node1
