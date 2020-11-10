import os


basedir = os.path.abspath(os.path.dirname(__file__))


class Config(object):
    # WHY? sqlite appears to be a default value. Yet it's a postgres/psql db.
    SQLALCHEMY_DATABASE_URI = os.getenv("DATABASE_URL", "sqlite://")
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    STATIC_FOLDER = f"{os.getenv('APP_FOLDER')}/project/static"
    MEDIA_FOLDER = f"{os.getenv('APP_FOLDER')}/project/media"
