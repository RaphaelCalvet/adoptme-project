from .db import db
from .model import Animal
from flask import request, jsonify
from sqlalchemy.exc import IntegrityError
from psycopg2.errors import UniqueViolation

class AnimalController:
    @staticmethod
    def get_all_animals():
        try:
            animals = Animal.query.all()
            return animals, 200
        except IntegrityError as e:
            return f'IntegrityError: {e}', 400

    @staticmethod
    def get_animal_by_id(animal_id):
        try:
            animal = Animal.query.get(animal_id)
            return animal, 200
        except IntegrityError as e:
            return f'IntegrityError: {e}', 400

    @staticmethod
    def create_animal(data):
        new_animal = Animal(
            name=data['name'],
            age=data['age'],
            gender=data['gender'],
            specie=data['specie'],
            description=data['description'],
        )
        try:
            db.session.add(new_animal)
            db.session.commit()
            return new_animal, 201
        except IntegrityError as e:
            db.session.rollback()
            return f'IntegrityError: {e}', 400

    @staticmethod
    def update_animal(animal_id, data):
        try:
            animal = Animal.query.get(animal_id)
            if not animal:
                return jsonify({'message': 'Animal not found'}), 404

            animal.name = data['name']
            animal.age = data['age']
            animal.gender = data['gender']
            animal.specie = data['specie']
            animal.description = data['description']
            db.session.commit()
            return animal, 200
        except IntegrityError as e:
            db.session.rollback()
            return f'IntegrityError: {e}', 400

    @staticmethod
    def delete_animal(animal_id):
        try:
            animal = Animal.query.get(animal_id)
            if not animal:
                return 'Animal not found', 404

            db.session.delete(animal)
            db.session.commit()
            return f'Animal deleted successfully', 200
        except IntegrityError as e:
            db.session.rollback()
            return f'IntegrityError: {e}', 400
