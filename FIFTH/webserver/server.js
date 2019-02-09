var http = require('http');

http.createServer(function(req,res){
    //res.writeHead(200,{'Content-Type':'text/plain'});
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end('Hello from <b><u>Node Server</u></b>');
}).listen(5500,'127.0.0.1');

console.log('Server running at http://127.0.0.1:5500/');