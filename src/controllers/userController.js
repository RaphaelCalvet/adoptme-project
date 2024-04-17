const User = require('../models/userModel');
const {all} = require("express/lib/application");

class UserController {

    async getAllUsers(req, res) {
        try {
            const users = await User.find(undefined, undefined, undefined);
            res.status(200).json(users);
        }
        catch(error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getUserById(req, res) {
        const { id } = req.params;
        try {
            const user = await User.findById(id);
            if (!user) {
                return res.status(404).json({message: `User with id ${id} not found`});
            }
        }
        catch(error) {
            res.status(500).json({ message: error.message });
        }
    }

    async createUser(req, res) {}
}