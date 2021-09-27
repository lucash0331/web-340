/*
============================================
;  Title: Assignment 7.4
;  Author: Lucas Hoffman
;  Date: September 25, 2021
;  Description: Employee.js file for EMS assignment 
;===========================================
*/

// Declaring Mongoose/Schema variables
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Defining the employeeSchema variable
var employeeSchema = new Schema({
  firstName: { type: String, required: true, unique: true },
  lastName: { type: String, required: true, unique: true },
});

// Declaring the employee model
var Employee = mongoose.model("Employee", employeeSchema);

// Exporting Employee module to calling files
module.exports = Employee;
