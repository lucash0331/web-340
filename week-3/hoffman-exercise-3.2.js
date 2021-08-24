/*
    Title: hoffman-exercise-3.2.js
    Author: Lucas Hoffman
    Date: 8/24/2021
    Description: Assignment 3.2
    Link to GitHub repository: https://github.com/lucash0331/web-340
 */

// Require statements for out required libraries
var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');

// Assign express object to app variable
var app = express();

// Use app var to set the views and tell express to use the views engine
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

// Set up our logger
app.use(logger('dev'));

// Create get request that listens to anything with a "/", render index page, and output a message
app.get('/', function(req, res) {
    res.render('index', {
        message: 'These videos really help me understand the material!'
    });
});

// Create a server and listen on port 3000
http.createServer(app).listen(3000, function() {
   console.log('Application started and listening on port %s', 3000);
});