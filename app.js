require('dotenv/config');

const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}))

require('./src/routes')(app);

app.listen(process.env.PORT, ()=>{
    console.log(`Server started on port ${process.env.PORT}`);  
})

module.exports = app;