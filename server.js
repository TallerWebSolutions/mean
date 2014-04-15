var http = require("http");
var fs = require('fs');
var index = fs.readFileSync('public/index.html');

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.end(index);

}).listen(3000);

console.log('Server running at http://localhost:3000/');
