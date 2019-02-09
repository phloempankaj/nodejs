var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello <b>World!</b>');
}).listen(1635); 

console.log("Server is Started. URL : http://127.0.0.1:1635");