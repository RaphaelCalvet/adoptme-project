const setting = require('./envSettings');
const mongoose = require('mongoose');

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(`mongodb://${setting.dbUsername}:${setting.dbPassword}@${setting.dbHost}:${setting.dbPort}/${setting.dbName}?authSource=admin`);
        console.log('Connected to MongoDB');
    }
    catch (error) {
        console.error('Error connecting to MongoDB', error);
    }
};

module.exports = connectToMongoDB;