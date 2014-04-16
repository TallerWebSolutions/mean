/**
 * Database connection.
 */

var config   = require("./config.json"),
    mongoose = require('mongoose');

mongoose
  .connect('mongodb://' + config.database.host + '/' + config.database.name)
  .connection.on('error', function(err){
    console.log('Connection error: ', err)
  });

module.exports = mongoose;
