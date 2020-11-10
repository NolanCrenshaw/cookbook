import os


basedir = os.path.abspath(os.path.dirname(__file__))


class Config(object):
    # WHY? sqlite appears to be a default value. It's a postgres/psql db, however.
    SQLALCHEMY_DATABASE_URI = os.getenv("DATABASE_URL", "sqlite://")
    SQLALCHEMY_TRACK_MODIFICATIONS = False
