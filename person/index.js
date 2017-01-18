
// Dependencies
var express = require('express');
var router = express.Router();

//Person
var Person = require('./model');
Person.methods(['get', 'put', 'post', 'delete']);
Person.register(router, '/persons');

// Return router
module.exports = router;