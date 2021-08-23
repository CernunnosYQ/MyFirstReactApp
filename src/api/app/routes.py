from flask import Blueprint
from flask.json import jsonify, Response

users_bp = Blueprint('Users', __name__)

@users_bp.route('/users', methods=['POST'])
def createUser():
    pass

@users_bp.route('/users', methods=['GET'])
def getUsers():
    pass

@users_bp.route('/users/<user_id>', methods=['GET'])
def getUser(user_id):
    pass

@users_bp.route('/users/<user_id>', methods=['PUT'])
def replaceUser():
    pass
    
@users_bp.route('/users/<user_id>', methods=['PATCH'])
def modifyUser():
    pass
    
@users_bp.route('/users/<user_id>', methods=['DELETE'])
def deleteUser():
    pass