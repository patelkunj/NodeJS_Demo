var express = require('express');
var route = express.Router();

//todo. Super Category
var supercategory = require('../../routes/master/supercategory');
route.use('/api/supercategory', supercategory);

module.exports = route;