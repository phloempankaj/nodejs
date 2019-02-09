var http = require('http');
var fs=require('fs');



http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    var html=fs.readFileSync(__dirname+'/index.html','utf8');

    //data
    var i=1;
    var n="pankaj";
    var g="male";
    var c="delhi";
    var s=45000;

    //binding
    html = html.replace('{id}',i);
    html = html.replace('{name}',n);
    html = html.replace('{gender}',g);
    html = html.replace('{city}',c);
    html = html.replace('{salary}',s);

    res.end(html);

}).listen(5500,'127.0.0.1');

console.log('Server running at http://127.0.0.1:5500/');