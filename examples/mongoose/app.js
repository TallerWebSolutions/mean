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

var dados = {
  name: 'Skol',
  description: 'Vixe Maria!',
  alcohol: 3.5,
  category: 'Pilsen'
}

var model = new Beer(dados);

model.save(function (err, data) {
  if (err){
    console.log('Erro: ', err);
  }
  console.log('Beer successfully inserted!', data);
});
