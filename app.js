var config = require('./config.json'),
    http = require('http'),
    beer = require('./routes').beer;
 

http.createServer(function(req, res) {
  res.writeHead(200, {"Content-Type": "text/plain"});
 
  beer[req.url] && beer[req.url](req, res);
 
}).listen(8080);