/*
============================================
; Title: Exercise 7.3
; Author: Lucas Hoffman
; Date: September 25, 2021
; Description: Chai Test example
;===========================================
*/

// Creating fruits function
function fruits(str) {
    return str.split(",");
}

// Exporting the module
module.exports = fruits;