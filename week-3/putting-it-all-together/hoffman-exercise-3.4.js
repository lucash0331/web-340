/*
    Title: hoffman-exercise-3.4.js
    Author: Lucas Hoffman
    Date: 8/24/2021
    Description: Assignment 3.4
    Link to GitHub repository: https://github.com/lucash0331/web-340
 */

// Require statements for our required libraries
const express = require('express');
const http = require('http');
const path = require('path');
const logger = require('morgan');

// Assign express object to app variable
let app = express();

// Use app variable to set the views and tell express to use the views engine
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

// Set up our logger
app.use(logger('dev'));

// Create a get request that listens to anything with a "/", render index page, and output a message
app.get('/', function(req, res){
    res.render('index', {
        message: "Home page"
    });
});

// Create a get request that listens to anything in the about page, render about page, and output a message
app.get('/about', function(req, res) {
    res.render('about', {
        message: "About page"
    });
});

// Create a get request that listens to anything in the contact page, render contact page, and output a message
app.get('/contact', function(req, res) {
    res.render('contact', {
        message: "Contact page"
    });
});

// Create a get request that listens to anything in the products page, render products page, and output a message
app.get('/products', function(req, res) {
    res.render('products', {
        message: "Products page"
    });
});

// Create a server and listen on port 8080
http.createServer(app).listen(8080, function() {
    console.log("Application started on port %s, 8080");
});