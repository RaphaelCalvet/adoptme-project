const setting = require('./settings/envSettings');
const userRouter = require('./routes/userRoutes');
const path = require('path');
const connectToMongoDB = require('./settings/dbSettings');

const express = require('express');
const app = express();

// Middlewares
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Routes
app.use('/user', userRouter)

app.listen(setting.port, (err) => {
    if (err) throw err;
    connectToMongoDB()
    console.log(`Server started on port: http://localhost:${setting.port}/`);
})