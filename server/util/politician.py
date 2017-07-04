from util.db import DatabaseManager

class Politician():

   def search(self, db_man, query):
       results = db_man.search_verticies(query)
       return self.serialize(results)

   def get_information(self, db_man, entity):
       result = db_man.get_entity(entity)
       if len(result) > 0:
           return result[1]
       else:
           raise Exception()
 
   def serialize(self, results):
       res = []
       for row in results:
           pol = (row[0], row[1])
           res.append(pol)
            
       return res
