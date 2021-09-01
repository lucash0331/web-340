/*
Title: hoffman-exercise-4.2.js
Author: Lucas Hoffman
Date: 8/30/2021
Description: Content for  Assignment 4.2.js
Link to GitHub repository: https://github.com/lucash0331/web-340
*/

// Require statements for our required libraries
const express = require('express');
const http = require('http');
const logger = require('morgan');

// Assign express object to app variable & process on port 3000
let app = express();

// Set up our logger
app.use(logger("dev"));

// Create get request that listens to anything with ID, grab id that was passed through the url.
app.get('/customer/:id', function (req, res) {
    var id = parseInt(request.params.id, 10);

//Respond with a JSON object.
    res.json({
        firstName: "Lucas",
        lastName: "Hoffman",
        employeeId: id
    });
});

// Create a server and listen on specified port
http.createServer(app).listen(3000, function () {
    console.log('Application started and listening on port 3000');
});