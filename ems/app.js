/*
Title: app.js
Author: Lucas Hoffman
Date: 09/19/2021
Description: App.js file for EMS assignment
*/

//Require statements for express, http, path, helmet, and morgan.
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var helmet = require("helmet");
var mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const csrf = require("csurf");
var Employee = require("./models/employee");

// Initialize express
var app = express();

// Setup csurf protection
var csrfProtection = csrf({ cookie: true });

//Telling express to look in the views folder for files.
app.set("views", path.resolve(__dirname, "views"));

//Telling express to use the ejs view engine
app.set("view engine", "ejs");

// Assign a port
app.set("port", process.env.PORT || 8080);

//Use Statements
app.use(logger("dev"));
app.use(helmet.xssFilter());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());
app.use(csrfProtection);
app.use(function (request, response, next) {
  var token = request.csrfToken();
  response.cookie("XSRF-TOKEN", token);
  response.locals.csrfToken = token;
  next();
});

//Route to home page
app.get("/", function (request, response) {
  response.render("index", {
    title: "Home page",
    message: "Employee Database",
  });
});

//Routing to new employee page
app.get("/new", function (request, response) {
  response.render("new", {
    title: "New",
    message: "Enter your first and last name",
  });
});

//Routing to list page
app.get("/list", function (request, response) {
  Employee.find({}, function (error, employees) {
    if (error) throw error;
    response.render("list", {
      title: "Employee List",
      employees: employees,
    });
  });
});

app.get("/", function (request, response) {
  response.render("index", {
    title: "XSS Prevention Example",
  });
});

//Process Request
app.post("/process", function (request, response) {
  if (!request.body.txtFirstName || !request.body.txtLastName) {
    response.status(400).send("Entries must have both names filled out.");
    return;
  }

  //Data from form
  const firstName = request.body.txtFirstName;
  const lastName = request.body.txtLastName;
  console.log(firstName);
  console.log(lastName);

  // Creates Employee Model
  let employee = new Employee({
    firstName: firstName,
    lastName: lastName,
  });

  //Save
  employee.save(function (error) {
    if (error) throw error;
      console.log(firstName + " " + lastName + " Your entry was successfully saved!");
  });
    response.redirect("/");
});

//Display Employee Record
app.get("/view/:queryName", function (request, response) {
  var queryName = request.params.queryName;
  Employee.find({ firstName: queryName }, function (error, employees) {
    if (error) throw error;
    if (employees.length > 0) {
      response.render("view", {
        title: "Employee Record",
        employee: employees,
      });
    } else {
      response.redirect("/list");
    }
  });
});


//MongoDB Connection Module
var mongoDB = "mongodb+srv://admin:admin@buwebdev-cluster-1.umga8.mongodb.net/test";
mongoose.connect(mongoDB, {});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error: "));
db.once("open", function () {
  console.log("Application connected to MongoDB instance");
});

//Creates server to listen on port 8080
http.createServer(app).listen(app.get("port"), function () {
  console.log("Application started on port + app.get("port"));
});
