class Node():
    
    def __init__(self, id_):
        self.id_ = id_
        self.name = ""
    
    def __hash__(self):
        return hash(self.id_)

    def __eq__(self, other):
        return self.id_ == other.id_

    def __str__(self):
        return self.id_

    def __repr__(self):
        return self.__str__()

class Graph():
    
    def __init__(self, src, manager):
        self.manager = manager
        self.verticies = {}
        self.src = Node(src)
        self.add_vertex(self.src)

    def add_vertex(self, node):
        self.verticies[node] = []

    def add_connection(self, src, dest, text):
        self.verticies[src].append(dest)
        
        if dest not in self.verticies:
            self.verticies[dest] = []
        self.verticies[dest].append(src)
    
    def get_adjacent_verticies(self, src):
        if src not in self.verticies:
            raise Exception
        return self.verticies[src]

    def bfs(self, dest):
         dest = Node(dest)
         path = [[self.src]]
         visited = set()

         while len(path) > 0:
             curr_path = path.pop(0)
             node = curr_path[-1]
             if node == dest:
                 return curr_path

             self.manager.get_edges(node) # get the neighboring nodes from the database and populate graph
             for v in self.get_adjacent_verticies(node):
                 if v not in visited:
                     new_path = list(curr_path)
                     new_path.append(v)
                     path.append(new_path)
                     visited.add(v)

