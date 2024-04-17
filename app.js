const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, (err, list) => {
    if (err) throw err;
    console.log(`Server started on port: http://localhost:${port}/`);
})