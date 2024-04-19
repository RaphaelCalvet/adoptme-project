const express = require('express');
const userController = require('../controllers/userController');

const userRouter = express.Router();

userRouter.get('/list', userController.getAllUsers);
userRouter.get('/:id', userController.getUserById);
userRouter.post('/register', userController.createUser);
userRouter.post('/login', userController.login);

module.exports = userRouter;