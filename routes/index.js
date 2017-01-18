// Dependencies
var routes = require('express').Router();
var router = express.Router();
 
// routes.get('/', (req, res)=>{
//     res.status(200).json({message: 'Connected!'});
// })
 
// module.exports = routes;

var Person = require('../models/person');
Person.methods(['get', 'put', 'post', 'delete']);
Person.register(router, '/persons');

module.exports = router;