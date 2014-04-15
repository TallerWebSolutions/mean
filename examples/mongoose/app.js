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

var schema = {name: String, age: Number};

var Cat = mongoose.model('Cat', schema);

var kitty = new Cat({ name: 'Osvaldinho', age: 666});

kitty.save(function (err) {
  if (err){
    console.log('Erro: ', err);
  }
  console.log('meow');
});
