from flask import Flask, request, render_template, jsonify
from sqlalchemy import create_engine
from urllib.parse import urlparse
import configparser
import psycopg2

from util.connections import Connections
from util.politician import Politician
from util.db import DatabaseManager

app = Flask(__name__)

def get_db_conn():
    config = configparser.ConfigParser()
    config.read('config.ini')
    url = config.get('Database config', 'DATABASE_URL')
    url = urlparse(url)

    c = psycopg2.connect(
        database=url.path[1:],
        user=url.username,
        password=url.password,
        host=url.hostname,
        port=url.port
    )

    return c

@app.route('/api/search')
def search():
    if 'src' not in request.args:
        return 'src node not provided', 400
    if 'dest' not in request.args:
        return 'dest node not provided', 400
   
    src = request.args.get('src')
    dest = request.args.get('dest')

    if src == dest:
        return 'Source and destination cannot be the same', 400

    conns = Connections(db_man, src)
    path = conns.search(dest)

    if len(path) == 0:
        return 'Could not find path', 400

    response_path = conns.get_path_with_context(path)
    
    return jsonify(response_path)

@app.route('/api/politician/search')
def politician_seach():
    if 'q' not in request.args:
        query = ""

    query = request.args.get('q')

    results = Politician().search(db_man, query)

    response = {
        "results": results
    }

    return jsonify(response)

@app.route('/')
def index():
    return render_template('index.html')

def get_serialized_path(path):
    bfs_path = [] 
    for vertex in path:
        obj = {
            "id": vertex.id_,
            "name": ""
        }
        bfs_path.append(obj)
    return bfs_path

engine = create_engine('postgresql://', creator=get_db_conn)
db_man = DatabaseManager(engine)

if __name__ == '__main__':
    app.run()
