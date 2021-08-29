from flask import Flask
from app.routes import users_bp
from app.db import mongo
from app.error_handling import registerErrorHandlers

def createApp():
    app = Flask(__name__)
    app.config.from_pyfile('config.py')

    mongo.init_app(app)

    app.register_blueprint(users_bp)

    registerErrorHandlers(app)

    return app
