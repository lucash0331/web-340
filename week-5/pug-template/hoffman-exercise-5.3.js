/*
  Title: hoffman-exercise-5.3.js
  Author: Lucas Hoffman
  Date: 12 September 2021
  Description: hoffman-exercise-5.3.js 
  Reference: https://www.w3schools.com/whatis/whatis_bootstrap.asp
  link to Github repository: https://github.com/lucash0331/web-340
*/


// require
var express = require('express');
var http = require('http');
var path = require('path');
var pug = require('puh');

// set up express app
var app = express();

// set up views folder
app.set('views', path.resolve(__dirname, 'views'));

// set up views engine
app.set('view engine', 'pug');

// create basic route
app.get('/', function(req, res) {
   res.render('index', {
       message: 'I am starting to get the hang of this confusing language!'
   });
});

// create server
http.createServer(app).listen(3000, function() {
   console.log('Application started and listening on port 3000')
});
