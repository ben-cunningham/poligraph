class Path():
    
    def __init__(self, node, context):
        self.node = node
        self.context = context

class Node():
    
    def __init__(self, id_):
        self.id_ = id_
        self.paths = []

