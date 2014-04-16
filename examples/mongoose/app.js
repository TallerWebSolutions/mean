// Mongoose App.

var http = require("http");
var Beer = require('./schema.js').Beer;

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/pain"});

  var url = request.url;

  if (url == '/beers/create') {
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
  }

}).listen(3000);

console.log('Server running at http://localhost:3000/');
