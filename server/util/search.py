from util.db_util import DatabaseUtil
from util.node import Node

class Search():

    def __init__(self, src):
         self.src = self.Node(src)

    def bfs(self, dest):
         dest = self.Node(dest)
         DatabaseUtil().get_edges(dest.id_)
