
// Dependencies
var express = require('express');
var router = express.Router();

//Colleague
var Colleague = require('./model');
Colleague.methods(['get', 'put', 'post', 'delete']);
Colleague.register(router, '/colleague');

// Return router
module.exports = router;