/*
    Title: hoffman-exercise-2.3.js
    Author: Lucas Hoffman
    Date: 8/22/2021
    Description: Assignment 2.3
 */

// Require statement for express
var express = require('express');

// Require statement for HTTP it requires us to start the server
var http = require('http');

// Create a variable for express
var app = express();

//routes
app.get('/', function(req, res){
    res.end('Welcome to the homepage.\n');
});

app.get('/about', function(req, res)
    {
     res.end('Welcome to the about page.\n');
    });

app.get('/contact', function(req, res)
    {
       res.end('Welcome to the contact page.\n');
    });

//Create global route handler for bad requests and respond with a 404 message
app.use(function(req, res)
    {
        res.statsCode = 404;
        res.end('404!\n');
    });

http.createServer(app).listen(3000, function(){
    console.log('Application started on port %s', 3000);
});