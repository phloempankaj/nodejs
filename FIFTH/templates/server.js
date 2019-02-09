var http = require('http');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    var html="<html>";
    html+="<head><title>Template 1</title></head>";
    html+="<body>";
    html+="<h1>Template 1</h1>";
    html+="<hr />";
    html+="</body>";
    html+="</html>";
    res.end(html);
}).listen(5500,'127.0.0.1');

console.log('Server running at http://127.0.0.1:5500/');