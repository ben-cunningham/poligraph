from util.db import DatabaseManager

class Politician():
   
   def search(self, query):
       db = DatabaseManager()
       results = db.search_verticies(query)
       return results

   def get_information(self, entity):
       pass

