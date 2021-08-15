/*
============================================================================
Title: Assignment 1.5.js
Author: Lucas Hoffman
Date: August 12, 2021
Description: Assignment 1.5 course work
Link to GitHub repository: https://github.com/lucash0331/web-340
============================================================================
*/



const http = require('http');

function processRequest(req, res) {
   
  const body = 'I hope this assignment earns me an A!';

    const contentLength = body.length;

    res.writeHead(200, {

        'Content-Length': contentLength,

        'Content-Type': 'text/plain'

  })

  res.end(body);

}

const s = http.createServer(processRequest);

s.listen(8080);