from .db import db

class Animal(db.Model):
    __tablename__ = 'animals'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50))
    age = db.Column(db.Integer)
    gender = db.Column(db.String(50))
    specie = db.Column(db.String(50))
    description = db.Column(db.Text)

    def __repr__(self):
        return '<Animal: {}>'.format(self.name)
