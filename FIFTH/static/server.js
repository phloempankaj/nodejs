var http = require('http');
var fs=require('fs');

http.createServer(function(req,res){
    if(req.url==='/' && req.method === 'GET'){
        sendFileContent(res, "index.html", "text/html");     
    }
    else if(/^\/[a-zA-Z0-9\/]*.js$/.test(req.url.toString())){
		sendFileContent(res, req.url.toString().substring(1), "text/javascript");
	}
	else if(/^\/[a-zA-Z0-9\/]*.css$/.test(req.url.toString())){
		sendFileContent(res, req.url.toString().substring(1), "text/css");
	}
	else if(req.url==="/home" && req.method==="GET"){
		sendFileContent(res, "home.html", "text/html");     
    }
    else{
		console.log("Requested URL is: " + req.url);
		res.end();
	}
}).listen(3000,'127.0.0.1');
console.log('Server running at http://127.0.0.1:3000');

function sendFileContent(res, fileName, contentType){
	fs.readFile(fileName, function(err, data){
		if(err){
			res.writeHead(404);
			res.write("Not Found!");
		}
		else{
			res.writeHead(200, {'Content-Type': contentType});
			res.write(data);
		}
		res.end();
	});
}