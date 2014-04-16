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

var Schema = mongoose.Schema;

var BeerSchema = new Schema({
  name: { type: String, default: '' },
  description: { type: String, default: '' },
  alcohol: { type: Number, min: 0},
  category: { type: String, default: ''},
  created: { type: Date, default: Date.now }
});

var Beer = mongoose.model('Beer', BeerSchema);

var query = {name: {$regex: /heineken/i }};

var mod = {alcohol: 90};

Beer.update(query, mod, {multi: true}, function (err, beer) {
  if (err){
    console.log('Erro: ', err);
  }else{
    console.log('The Beer was successfully updated!', beer);
  }
});
