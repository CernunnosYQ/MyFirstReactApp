import logging

class Logger():
    def __init__(self, filename=None, level='mid'):
        self.filename = filename

        if self.filename:
            with open(filename, 'w') as file:
                file.write('')

        if level == 'high':
            logging.basicConfig(level=logging.DEBUG, filename=self.filename)
        if level == 'mid':
            logging.basicConfig(level=logging.WARNING, filename=self.filename)
        if level == 'low':
            logging.basicConfig(level=logging.CRITICAL, filename=self.filename)
        

    def debug(self, msg):
        logging.debug(f' >> {msg}')

    def info(self, msg):
        logging.info(f' >> {msg}')

    def warn(self, msg):
        logging.warning(f' >> {msg}')

    def error(self, msg):
        logging.error(f' >> {msg}')

    def critical(self, msg):
        logging.critical(f' >> {msg}')