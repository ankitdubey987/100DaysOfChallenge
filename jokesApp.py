import requests
from flask import Flask,request,jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def jokesHome():
    url = 'https://api.chucknorris.io/jokes/random'
    resp = requests.get(url).json()
    return jsonify(data=resp['value'])

if __name__=='__main__':
    app.run()