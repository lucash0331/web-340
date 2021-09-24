/*
============================================
; Title:  hoffman-exercise-7.2.js
; Author: Lucas Hoffman
; Date: September 24, 2021
; Description: Test example for assignment 7.2
;===========================================
*/

// Assert var declaration
var assert = require("assert");
const { isTypedArray } = require("util/types");

// Describe specifications 
describe("String#split", function() {

    // Title of the specification
    it("should return an array of fruits", function() {
        assert(Array.isArray("Apple,Orange,Mango".split(",")));
    });
});
