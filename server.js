// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
 
// MongoDB
//mongoose.connect(process.env.OPENSHIFT_MONGODB_DB_URL || 'mongodb://localhost/countries-app');
// mongoose.connection.on('error', function(){});
 
// Express
var app = express();
 
app.use(express.static(__dirname + '/public'));
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
 
// Routes
//app.use('/api', require('./routes/api'));
 
// Start server
var server = app.listen(process.env.PORT || 8080, function() {
    var port = server.address().port;
    console.log('Express server listening on %d', port);
});