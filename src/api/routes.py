"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route("/user", methods=['POST', 'GET'])
def handle_user():

    if request.method == "GET":
        all_users = User.query.all()
        serialized = list(map(lambda x: x.serialize(), all_users))
        return jsonify(serialized), 200
    elif request.method == "POST":
        return "POST"
    else :
        return "Method Not Found"