/*
=================================================================
;  Title: app.js
;  Author: Lucas Hoffman
;  Date: September 26, 2021
;  Description: App.js Code for EMS Project
=================================================================
*/

//Require statements for express, http, path and morgan.
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var mongoose = require("mongoose");
var Employee = require("./models/employee");
var mongoDB = "mongodb+srv://admin:admin@buwebdev-cluster-1.umga8.mongodb.net/test";

mongoose.connect(mongoDB, {});

mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error: "));

db.once("open", function () {
  console.log("Application connected to MongoDB instance");
});

// Assigning express object to app variable
var app = express();

//Telling express to look in the views folder for files.
app.set("views", path.resolve(__dirname, "views"));

//Telling express to use the ejs view engine
app.set("view engine", "ejs");

//Adding the logger app
app.use(logger("dev"));

//Get request for the index page
app.get("/", function (request, response) {
  response.render("index", {
    title: "Home Page",
  });
});

//Get request for the list page
app.get("/list", function (request, response) {
  response.render("list", {
    title: "Lists Page",
  });
});

//Get request for the new employee page
app.get("/new", function (request, response) {
  response.render("new", {
    title: "New Employee Page",
  });
});

//Creates server to listen on port 8080
http.createServer(app).listen(8080, function () {
  console.log("Application started on port 8080!");
});
});
