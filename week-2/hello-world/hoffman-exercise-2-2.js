/*
    Title: hoffman-exercise-2-2.js
    Author: Lucas Hoffman
    Date: 8/22/2021
    Description: Assignment 2.2
 */

// Require statement for express
var express = require('express');

// Require statement for HTTP it requires us to start the server
var http = require('http');

// Create a variable for express
var app = express();


app.use(function(req, res)
    {
        //Log a statement to the console and return a value to client who tries to access the URL
        console.log('In comes a request to: %s', req.url);


        res.end('Hello World/n');
    })

//Create a new server and listen on a new port and add what port it is listening on
http.createServer(app).listen(8080, function()
    {
        console.log('Application started on port %s', 8080);
    });