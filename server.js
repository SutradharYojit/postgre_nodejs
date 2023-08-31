const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const test_routes_1=require('./api/routes/test_routes_1')
const test_routes_2=require('./api/routes/test_routes_2')

// show that which type of data in coming from body
app.use(morgan('dev'));// 1 middleware
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: false }));
// 2 middleware 

app.use('/userData', test_routes_1)

app.use('/movie', test_routes_2)


setTimeout(function () {
    console.log("This is the second statement");
}, 4000);

console.log("This is the third statement");


module.exports = app;