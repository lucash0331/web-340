/*
Title: hoffman-exercise-4.3.js
Author: Lucas Hoffman
Date: 9/01/2021
Description: Content for  Assignment 4.3.js
Link to GitHub repository: https://github.com/lucash0331/web-340
*/

// Require statements for our required libraries
const express = require('express');
const http = require('http');
const logger = require('morgan');

// Assign express object to app variable
let app = express();

// Set up out logger
app.use(logger('dev'));

// Requests using status codes
app.get('/not-found', function(req, res){
    res.status(404);
    
    res.json({
        error: 'Resource not found.'
    });
});

app.get('/ok', function (req, res) {
    res.status(200);

    res.json({
        error: 'Page loaded correctly.'
    });
});

app.get('/not-implemented', function (req, res) {
    res.status(501);

    res.json({
        error: 'Page not implemented'
    });
});

// Create a server and listen on port 3000
http.createServer(app).listen(3000, function (){
    console.log('Applications started and listening on port 3000');
});






