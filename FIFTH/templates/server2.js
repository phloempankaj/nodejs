var http = require('http');
var fs=require('fs');



http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    var html=fs.readFileSync(__dirname+'/index.html');
    res.end(html);
}).listen(5500,'127.0.0.1');

console.log('Server running at http://127.0.0.1:5500/');