from flask_pymongo import PyMongo
from bson.objectid import ObjectId

mongo = PyMongo()

class User:
    def __init__(self, id='', username='', password='', email='', first='', last='', biography=''):
        self.id = id
        self.username = username
        self.password = password
        self.email = email
        self.first = first
        self.last = last
        self.biography = biography


    def toDict(self):
        dict = {}

        if self.username:
            dict['username'] = self.username
        if self.password:
            dict['password'] = self.password
        if self.email:
            dict['email'] = self.email
        if self.first:
            dict['first'] = self.first
        if self.last:
            dict['last'] = self.last
        if self.biography:
            dict['biography'] = self.biography

        return dict


    def save(self):
        result = mongo.db.users.insert_one(self.toDict())
        return result.inserted_id


    def update(self):
        result = mongo.db.users.update_one(
            {'_id': ObjectId(self.id)},
            {'$set': self.toDict()})

        return result.matched_count


    @classmethod
    def delete(cls, id):
        mongo.db.users.delete_one({'_id': ObjectId(id)})


    @classmethod
    def getAll(cls):
        return mongo.db.users.find()


    @classmethod
    def getById(cls, id):
        return mongo.db.users.find_one({'_id': ObjectId(id)})
