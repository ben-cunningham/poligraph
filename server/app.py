from flask import Flask, request, render_template

app = Flask(__name__)

@app.route('/api/search')
def search():
    if 'src' not in request.args:
        return 'src node not provided', 400
    if 'dest' not in request.args:
        return 'dest node not provided', 400
    
    src = request.args.get('src')
    dest = request.args.get('dest')



    return 'Hello friends'

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run()
