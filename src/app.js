const config = require('./settings/envSettings');
const connection = require('./settings/dbSettings');

const express = require('express');
const app = express();

app.listen(config.port, (err, list) => {
    if (err) throw err;
    console.log(`Server started on port: http://localhost:${config.port}/`);
})