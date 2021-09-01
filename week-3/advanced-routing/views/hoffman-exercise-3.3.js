/*
    Title: hoffman-exercise-3.2.js
    Author: Lucas Hoffman
    Date: 8/24/2021
    Description: Assignment 3.3
    Link to GitHub repository: https://github.com/lucash0331/web-340
 */

// Require statements for out required libraries
var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');

// Create an app variable
var app = express();

// Register our views folder in our views engine
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

// Configure our logger
app.use(logger('dev'));

// Create our first get request
app.get('/:productID', function(req, res) {
    var productID = parseInt(req.params.productID, 10);

    // Output to EJS page
    res.render('index', {
        productID: productID
    });
});

//Create a new server
http.createServer(app).listen(3001, function(){
    console.log('Application started and listening on port %s', 3001);
});