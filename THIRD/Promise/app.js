var fs = require('fs');

try{
    var promise = new Promise(function(resolve,reject){
        fs.readFile('data.txt','utf-8',function(error,data){
            if(error){
                return reject(error);
            }
            resolve(console.log(data));
        });
    });
}
catch(error){
    console.log("Error Occured");
}