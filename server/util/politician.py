from util.db import DatabaseManager

class Politician():
   
   def search(self, query):
       db = DatabaseManager()
       results = db.search_verticies(query)
       return results

   def get_information(self, entity):
       db = DatabaseManager()
       result = db.get_entity(entity)
       if len(result) > 0:
           return result[1]
       else:
           raise Exception()

