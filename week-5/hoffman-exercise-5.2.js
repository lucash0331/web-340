/*
Title: hoffman-exercise-5.2.js
Author: Lucas Hoffman
Date: 9/10/2021
Description: Content for  Assignment 5.2.js
Link to GitHub repository: https://github.com/lucash0331/web-340
*/

// Requires
var express = require('express');
var http = require('http');
var path = require('path');

// App functions
var app = express();
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

// Local sports teams array
var teams = [
    "Detroit Lions",
    "Detroit Pistons",
    "Detroit Tigers",
    "Detroit Red Wings"
];

// Routes
app.get('/', function(req, res) {
    res.render('index', {
        names: teams 
    });
});

// Create server
http.createServer(app).listen(3000, function(){
    console.log('Application started and listening on port 3000');
});
