from util.db_util import DatabaseUtil

class Search():

    class Node():
        
        def __init__(self, id_):
            self.id_ = id_
            self.edges = []
            
    def __init__(self, src):
         self.src = self.Node(src)

    def bfs(self, dest):
         dest = self.Node(dest)
         DatabaseUtil().get_edges(dest.id_)
