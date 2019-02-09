var http = require('http');
var fs=require('fs');



http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    var html="";
    if(req.url==='/' && req.method === 'GET'){
        html=fs.readFileSync(__dirname+'/index.html','utf-8');
        html=html.replace('{msg}',"Welcome to NODE");
        
    }
    else if(req.url==='/home' && req.method === 'GET'){
        html=fs.readFileSync(__dirname+'/home.html','utf-8');
        html=html.replace('{msg}',"Home page");
    }
    else if(req.url==='/about' && req.method === 'GET'){
        html=fs.readFileSync(__dirname+'/about.html','utf-8');
        html=html.replace('{msg}',"About Page");
    }
    else if(req.url==='/contact' && req.method === 'GET'){
        html=fs.readFileSync(__dirname+'/contact.html','utf-8');
        html=html.replace('{msg}',"Contact Page");
    }
    else if(req.url==='/gallary' && req.method === 'GET'){
        html=fs.readFileSync(__dirname+'/gallary.html','utf-8');
        html=html.replace('{msg}',"Gallary");
    }
    else if(req.url==='/feedback' && req.method === 'GET'){
        html=fs.readFileSync(__dirname+'/feedback.html','utf-8');
        html=html.replace('{msg}',"Feedback page");
    }
    res.end(html);
}).listen(5500,'127.0.0.1');

console.log('Server running at http://127.0.0.1:5500/');