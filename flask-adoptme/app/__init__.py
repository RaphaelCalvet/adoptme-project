from flask import Flask
from .config import Config
from .views import animal
from .db import db

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    db.init_app(app)
    app.register_blueprint(animal)

    with app.app_context():
        db.create_all()

    return app
