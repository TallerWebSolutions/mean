// Mongoose App.

var Beer = require('./schema.js').Beer;

var query = {name: {$regex: /heineken/i }};

var mod = {alcohol: 90};

Beer.update(query, mod, {multi: true}, function (err, beers) {
  if (err){
    console.log('Erro: ', err);
  }else{
    console.log('The Beer was successfully updated!');
  }
});
