from flask import Blueprint, render_template, redirect, request, url_for, flash, jsonify
from .controller import AnimalController

animal = Blueprint('animal', __name__)

@animal.route('/', methods=['GET'])
def animals_list():
    animals, status = AnimalController.get_all_animals()
    if status == 200:
        return render_template('index.html', animals=animals)
    else:
        return render_template('index.html', error=f'Failed {status}')

@animal.route('/create', methods=['POST', 'GET'])
def create_animal():
    if request.method == 'POST':
        data = request.form.to_dict()
        print(data)
        result, status = AnimalController.create_animal(data)
        if status == 201:
            flash(f'Animal {data.get("name")} created successfully')
            return redirect(url_for('animal.animals_list'))
        else:
            flash(f'Failed {status}')
            return redirect(url_for('animal.animals_list'))
    return render_template('create.html')

@animal.route('/update/<int:animal_id>', methods=['GET', 'POST'])
def update_animal(animal_id):
    if request.method == 'GET':
        result, status = AnimalController.get_animal_by_id(animal_id)
        if status == 200:
            return render_template('update.html', animal=result)
        return redirect(url_for('animal.animals_list', error=f'Failed {status}'))

    data = request.form.to_dict()
    result, status = AnimalController.update_animal(animal_id, data)
    if status == 200:
        flash(f'Animal {data.get("name")} updated successfully')
        return redirect(url_for('animal.animals_list'))
    else:
        flash(f'Failed {status}')
        return redirect(url_for('animal.animals_list', error=f'Failed {status}'))

@animal.route('/delete/<int:animal_id>', methods=['DELETE'])
def delete_animal(animal_id):
    result, status = AnimalController.delete_animal(int(animal_id))
    if status == 200:
        flash(f'Animal {animal_id} deleted successfully')
        return result, status
    flash(f'Failed {status}')
    return result, status

