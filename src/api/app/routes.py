from flask import Blueprint, Response, request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from bson import json_util
from app.error_handling import MissingKeyException, MissingUserException

from app.db import User

users_bp = Blueprint('Users', __name__)

@users_bp.route('/users', methods=['POST'])
def createUser():
    data = request.json
    try:
        username = data['username']
        password = data['password']
        email = data['email']
    except(KeyError):
        raise MissingKeyException

    first = data['first'] if 'first' in data else ''
    last = data['last'] if 'last' in data else ''
    biography = data['biography'] if 'biography' in data else ''

    user = User(username=username, 
                password=generate_password_hash(password), 
                email=email,
                first=first,
                last=last,
                biography=biography)
    
    id = str(user.save())
    
    return jsonify(id=id), 201

@users_bp.route('/users', methods=['GET'])
def getUsers():
    data = User.getAll()
    resp = json_util.dumps(data)

    return Response(resp, mimetype='application/json', content_type='application/json', status=200)

@users_bp.route('/users/<user_id>', methods=['GET'])
def getUser(user_id):
    data = User.getById(user_id)
    resp = json_util.dumps(data)

    return Response(resp, mimetype='application/json', content_type='application/json', status=200)

@users_bp.route('/users/<user_id>', methods=['PUT'])
def replaceUser(user_id):
    data = request.json
    try:
        id = user_id
        username = data['username']
        password = data['password']
        email = data['email']
    except(KeyError):
        raise MissingKeyException

    first = data['first'] if 'first' in data else ''
    last = data['last'] if 'last' in data else ''
    biography = data['biography'] if 'biography' in data else ''

    user = User(id=id,
                username=username, 
                password=generate_password_hash(password), 
                email=email,
                first=first,
                last=last,
                biography=biography)
    
    result = user.update()
    
    if result:
        return jsonify(id=id), 200
    else:
        raise MissingUserException
    
@users_bp.route('/users/<user_id>', methods=['PATCH'])
def modifyUser(user_id):
    data = request.json

    if not data:
        raise MissingKeyException

    id = user_id
    username = data['username'] if 'username' in data else ''
    password = data['password'] if 'password' in data else ''
    email = data['email'] if 'email' in data else ''
    first = data['first'] if 'first' in data else ''
    last = data['last'] if 'last' in data else ''
    biography = data['biography'] if 'biography' in data else ''

    user = User(id=id,
                username=username,
                password=generate_password_hash(password),
                email=email,
                first=first,
                last=last,
                biography=biography)

    result = user.update()
    
    if result:
        return jsonify(id=id), 200
    else:
        raise MissingUserException
    
@users_bp.route('/users/<user_id>', methods=['DELETE'])
def deleteUser(user_id):
    User.delete(user_id)
    
    return jsonify(message='User successfully deleted')