const config = require('./envSettings');
const mongoose = require('mongoose');

const connection = async () => {
    try {
        await mongoose.connect(`mongodb://${config.dbHost}:${config.dbPort}/${config.dbName}`);
        console.log('Connected to MongoDB');
    }
    catch (error) {
        console.error('Error connecting to MongoDB', error);
    }
};

module.exports = connection;