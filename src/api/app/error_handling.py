from bson.errors import InvalidId
from flask import jsonify, request
from app.logger import Logger

logger = Logger('logs.txt', 'high')

def registerErrorHandlers(app):
    @app.errorhandler(Exception)
    def handleExceptionError(e):
        logger.warn(e)
        return jsonify(message='An error ocurred, please try again later'), 500

    @app.errorhandler(405)
    def handle405Error(e):
        logger.warn(e)
        return jsonify(message='Method not allowed for this route'), 405

    @app.errorhandler(404)
    def handle404Error(e):
        logger.warn(e)
        return jsonify(message=f'Resource not found {request.url}'), 404

    @app.errorhandler(403)
    def handle403Error(e):
        logger.warn(e)
        return jsonify(message='Forbidden, you dont have permission to access this resource'), 403

    @app.errorhandler(400)
    def handle400Error(e):
        logger.warn(e)
        return jsonify(message='Some key / value pair is missing'), 400

    @app.errorhandler(MissingKeyException)
    def handleMissingKeyError(e):
        logger.warn(e)
        return jsonify(message='Some key / value pair is missing'), 400

    @app.errorhandler(MissingUserException)
    def handleMissingUserError(e):
        logger.warn(e)
        return jsonify(message='User does not exist'), 404

    @app.errorhandler(InvalidId)
    def handleInvalidIDError(e):
        logger.warn(e)
        return jsonify(message='Invalid user id'), 400

class MissingKeyException(Exception):
    pass

class MissingUserException(Exception):
    pass