var fs = require('fs');

fs.readFile(__filename,function(error,data){
    if(error){
        return console.error(error.message);
    }
    console.log("Without UTF");
    console.log(data);
});


console.log();
console.log();

fs.readFile(__filename,{
    encoding:'utf-8'
    },function(error,data){
        if(error){
            return console.error(error.message);
        }
        console.log("With UTF");
        console.log(data);
    });

