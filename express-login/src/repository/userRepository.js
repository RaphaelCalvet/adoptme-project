const User = require('../models/userModel');

class userRepository {
    async findAll() {
        return User.find();
    }

    async find(id) {
        return User.findById(id);
    }

    async create(user) {
        const newUser = new User(user);
        return newUser.save();
    }

    async login(username, password) {
        const user = await User.findOne({ username, password })
        return user;
    }
}

module.exports = new userRepository();