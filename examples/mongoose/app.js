// Mongoose App.

var http = require("http");
var Beer = require('./schema.js').Beer;

var router = {
  /**
   * Create a beer.
   */
  '/beers/create': function (req, res) {
    var dados = {
      name: 'Skol',
      description: 'Mijo de Rato',
      alcohol: 79.5,
      category: 'pilsen'
    }

    var model = new Beer(dados);

    model.save(function (err) {
      if (err) {
        response.write('ERROR!!!');
        console.log('Erro: ', err);
      }
      else {
        var msg = 'Beer successfully inserted: ' + JSON.stringify(dados);
        response.write(msg);
        console.log(msg);
      }
      response.end();
    });
  },

  /**
   * Update a beer.
   */
  '/beers/update': function (req, res) {
  },

  /**
   * Delete a beer.
   */
  '/beers/delete': function (req, res) {
  },

  /**
   * Find a beer.
   */
  '/beers/find': function (req, res) {
  },
};

// Instantiate server.
http.createServer(function(req, res) {
  res.writeHead(200, {"Content-Type": "text/pain"});
  router[req.url] && router[url](req, res);
}).listen(3000);

console.log('Server running at http://localhost:3000/');
