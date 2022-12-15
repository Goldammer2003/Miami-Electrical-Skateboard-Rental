"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint
from flask_migrate import Migrate
from flask_swagger import swagger
from flask_cors import CORS
from api.admin import setup_admin
from api.models import db, User
from api.utils import generate_sitemap, APIException


# JWT
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager

import hashlib

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

@api.route("/signup",methods= ["POST"])
def handle_signup():
    
    information_inputFields = request.get_json(force=True)
    information_email = information_inputFields["email"]
    information_password= information_inputFields ["password"]
    information_Firstname =information_inputFields["firstname"]
    information_Lastname= information_inputFields ["lastname"]
    information_address = information_inputFields ["adress"]
    information_city =information_inputFields ["city"]
    information_state=information_inputFields ["state"]
    information_zipcode=information_inputFields ["zipcode"]
    information_country=information_inputFields ["country"]
    if User.query.filter_by(email=information_email).first() is None: #This line filters the User database created in the models.py file, to see if the entered email in the frontend input field is matched there. 
        user=User(email=information_email, password=information_password, firstName=information_Firstname,lastName=information_Lastname,address=information_address, city=information_city, state=information_state, country=information_country, zipcode=information_zipcode ) #If it is not matched, since the user tries to register it's email, it is creating "user"(literally means the actual Account/User) with  the properties of the User database in the models.py file through the information entered in the input fields, in our case stored in the variables like information_Firstname, information_Lastname etc. 

        db.session.add(user) # Now the data stored in the "user" is actually added to the waiting line of users being added to the Database (the waiting line is named queue)
        db.session.commit()#Now the added data finally goes to the database 
        return jsonify("You are now registered"),200 

    else: return jsonify ("Your account does already exist"),409


@api.route ("/signin", methods= ["POST"])
def handle_singin():
    information_inputFields = request.get_json(force=True)
    information_email = information_inputFields["email"]
    information_password= information_inputFields ["password"]
    user=User.query.filter_by(email=information_email, password=information_password).first()
    if user is None:
        return jsonify ("E-mail does not exist, please register first")

    else: 
        access_token=create_access_token(identity = user.id)
        return jsonify ({"token":access_token,"userid":user.id})
@api.route ("/validate-user",methods= ["GET"])
@jwt_required()
def validate_User():
    currentUser=get_jwt_identity()
    return jsonify (logged_in_as=currentUser),200 
if __name__ == "__main__":
    app.run()