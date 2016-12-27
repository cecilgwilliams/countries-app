// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;
 
// Schema
var personSchema = new mongoose.Schema({
    name: String,
     country: String
});
 
// Return model
module.exports = restful.model('Person', personSchema);