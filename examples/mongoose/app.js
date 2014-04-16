// Mongoose App.

'use strict';

var http = require('http');
var url = require('url');
var Beer = require('./schema.js').Beer;

var router = {
  /**
   * Create a beer.
   */
  '/beers/create': function (req, res) {
    var dados = {
      name: 'Saint Beer',
      description: 'Muito boa',
      alcohol: 79.5,
      category: 'Lager'
    }

    var model = new Beer(dados);

    model.save(function (err) {
      if (err) {
        res.write('ERROR!!!');
        console.log('Erro: ', err);
      }
      else {
        var msg = 'Beer successfully inserted: ' + JSON.stringify(dados);
        res.write(msg);
        console.log(msg);
      }
      res.end();
    });
  },

  /**
   * Update a beer.
   */
  '/beers/update': function (req, res) {

    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;
    if (!query) {
      res.write('ERROR!!!');
      console.log('Erro: Any query was passed!');
      res.end();
    }

    var query = {name: 'Saint Beer'};
    var mod = {alcohol: 666};
    var model = new Beer;

    model.update(query, mod, function (err, beer) {
      if (err) {
        console.log('Erro: ', err);
      }
      else {
        console.log('The Beer was successfully updated!', beer);
      }
      res.end();
    });
  },

  /**
   * Delete a beer.
   */
  '/beers/delete': function (req, res) {

    var query = {name: 'Skol'};

    Beer.remove(query, function(err, beer) {
      if(err) {
        console.log(err);
      } else {
        console.log(beers);
      }
      res.end();
    });
  },

  /**
   * Find a beer.
   */
  '/beers/find': function (req, res) {
    var query = {name: 'Heineken'};

    Beer.find(query, function (err, beers) {
      if(err) {
        console.log(err);
      } else {
        console.log(beers);
      }
      res.end();
    });
  }
}

// Instantiate server.
http.createServer(function(req, res) {
  res.writeHead(200, {"Content-Type": "text/plain"});
  router[req.url] && router[req.url](req, res);
}).listen(3000);

console.log('Server running at http://localhost:3000/');
