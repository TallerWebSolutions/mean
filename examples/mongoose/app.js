// Mongoose App.

var config   = require("./config.json"),
    mongoose = require('mongoose');

mongoose.connect('mongodb://' + config.database.host + '/' + config.database.name);

var db = mongoose.connection;
db.on('error', function(err){
  console.log('Erro de conexao.', err)
});

db.once('open', function () {
  console.log('Conexão aberta.')
});
