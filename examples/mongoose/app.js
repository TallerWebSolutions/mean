// Mongoose App.

var config   = require("./config.json"),
    mongoose = require('mongoose');

mongoose.connect('mongodb://' + config.database.host + '/' + config.database.name);

var db = mongoose.connection;
db.on('error', function(err){
  console.log('Connection error: ', err)
});

db.once('open', function () {
  console.log('Connection is open!')
});
