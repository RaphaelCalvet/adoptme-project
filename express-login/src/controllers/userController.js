const userRepository = require('../repository/userRepository');

class UserController {

    async getAllUsers(req, res) {
        try {
            const users = await userRepository.findAll();
            res.status(200).json(users);
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    };

    async getUserById(req, res) {
        const { id } = req.params;
        try {
            const user = await userRepository.find(id);

            if (!user) {
                return res.status(404).json({message: `User with id ${id} not found`});
            }

            res.status(200).json(user);
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    };

    async createUser(req, res) {
        try {
            const newUser = await userRepository.create(req.body);
            res.status(201).json(newUser);
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    };

    async login(req, res) {
        const { username, password } = req.body;
        try {
            const user = await userRepository.login(username, password);

            if (!user) {
                return res.status(401).json({message: `Wrong username or password`});
            }

            res.status(200).json(user);
        }
        catch (error) {
            res.status(500).json({message: error.message});
        }
    };
}

module.exports = new UserController;