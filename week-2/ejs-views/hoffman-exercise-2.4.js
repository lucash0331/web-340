/*
   Title: hoffman-exercise-2.4.js
   Author: Lucas Hoffman
   Date: 8/22/2021
   Description: Content for exercise 2.4
   Link to GitHub repository: https://github.com/lucash0331/web-340
*/

// Requires modules and puts it in the variables
var http = require("http");
var express = require("express");
var path = require("path");

// Calls express function to start a new Express app
var app = express();

//Tell Express the views are in the "views" directory
app.set("views", path.resolve(__dirname, "views"));

// Tell Express to use the EJS view engine
app.set("view engine", "ejs");

// This is called when a request to the root is made
app.get("/", function(request, response){
    response.render("index",{
        firstName: "Lucas",
        lastName: "Hoffman",
        address: "1234 Peachtree Road Atlanta, GA 30189",
    });
});

// This starts the server on port 8080
http.createServer(app).listen(8080, function(){
    console.log("EJS-Views app started on port 8080.");
});


