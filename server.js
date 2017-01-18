// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
 
// MongoDB
mongoose.connect('mongodb://localhost/countries-app');
// mongoose.connection.on('error', function(){});
 
// Express
var app = express();
//app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
 
// Routes
//var routes = require('./routes');
//app.use('/', routes);
app.use('/', require('./person/')) 

// app.get('/persons', function(req, res){
//     res.json({persons:"you asked for persons"})
// })

// Start server
app.listen(3000, ()=> {
    console.log('Express server listening on port 3000');
});