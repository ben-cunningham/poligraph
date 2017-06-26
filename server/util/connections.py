from util.db import DatabaseManager
from util.graph import Graph, Node

class Connections():

    def __init__(self, src):
        self.g = Graph(src, self)
        self.db = DatabaseManager()

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
                            "name": path[i].name
                        }
                    }

                    response_path.append(obj)
        return response_path

    def fetch_edges(self, src):
        edges = self.db.get_edges(src.id_)
        for edge in edges:
            print(edge[0])
            self.g.add_connection(src, Node(edge[1], edge[0]), edge[2])
