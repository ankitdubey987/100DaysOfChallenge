from flask import Flask, jsonify,request
# from db_users import get_users
import json

app = Flask(__name__)

@app.route('/users/<name:str>/',methods=['GET'])
def users(request):
    user_name = request.GET('name')
    print(user_name)
    res = get_users()
    res = json.dumps(res)
    if len(res)==0:
        return jsonify([])
    return jsonify(data=res,status=200)

@app.route('/')
def index():
    return jsonify([])

if __name__ == '__main__':
    app.run()