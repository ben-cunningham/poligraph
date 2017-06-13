class Node():
    
    def __init__(self, id_):
        self.id_ = id_
        self.name = ""
    
    def __hash__(self):
        return hash(self.id_)

    def __eq__(self, other):
        return self.id_ == other.id_

class Graph():
    
    def __init__(self):
        self.verticies = {}

    def add_vertex(self, node):
        self.verticies[node] = []

    def add_connection(self, src, dest, text):
        self.verticies[src].append(dest)
        
        if dest not in self.verticies:
            self.verticies[dest] = []
        self.verticies[dest].append(src)
