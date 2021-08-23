from flask import jsonify, request
from app.logger import Logger

logger = Logger('logs.txt', 'high')

def registerErrorHandlers(app):
    @app.errorhandler(Exception)
    def handleExceptionError(e):
        logger.error(e)
        return jsonify(message='An error ocurred, please try again later')

    @app.errorhandler(405)
    def handle405Error(e):
        logger.warn(e)
        return jsonify(message='Method not allowed for this route')

    @app.errorhandler(404)
    def handle404Error(e):
        logger.warn(e)
        return jsonify(message=f'Resource not found {request.url}')

    @app.errorhandler(403)
    def handle403Error(e):
        logger.warn(e)
        return jsonify(message='Forbidden, you dont have permission to access this resource')

    @app.errorhandler(400)
    def handle400Error(e):
        logger.warn(e)
        return jsonify(message='Some key / value pair is missing')