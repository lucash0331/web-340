/**
    Title: hoffman-exercise-6.3.js
    Author: Lucas Hoffman
    Date: 09/16/2021
    Description: Exercise 6.3 Mongoose Connection Exercise
 */

    // Require Statements for Express, HTTP, Morgan and Mongoose
    var express = require("express");
    var http = require("http");
    var logger = require("morgan");
    var mongoose = require("mongoose");
    
    // Variable for connection to Mongo DataBase
    var mongoDB = "mongodb+srv://admin:admin@buwebdev-cluster-1.umga8.mongodb.net/test";
    
    //Connecting to MongoDB
    mongoose.connect(mongoDB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    mongoose.Promise = global.Promise;
    
    //MongooseDB Var to hold connection
    var db = mongoose.connection;
    
    // In case of an error display message in the console
    db.on("error", console.error.bind(console, "MongoDB connected error:"));
    
    // If connected to MongoDB successfully display message in the console
    db.once("open", function () {
      console.log("Application connected to MongoDB");
    });
    
    //Create Express server
    var app = express();
    app.use(logger("dev"));
    
    //Creates HTTP server that listens on port 3001
    http.createServer(app).listen(3005, function () {
      console.log("application started on port 3001");
    });
