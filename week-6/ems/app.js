/*
Title: Exercise 6.4 - Web 340
Author: Lucas Hoffman
Date: 09/19/2021
Description: App.js file for assignment 6.4
*/

// Set requires for express, http, path and logger 
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

var app = express();

// Set views location and EJS as view engine
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

// Morgan options
app.use(logger("short"));

// Set view for rooot dir
app.get("/", function (request, response) {
  response.render("index", {
    title: "Home page",
  });
});

// Include static folder for CSS file for this assignment
app.use(express.static(__dirname + "/css"));

// Start webserver on port 8000
http.createServer(app).listen(8000, function () {
  console.log("Application started on port 8000!");
});