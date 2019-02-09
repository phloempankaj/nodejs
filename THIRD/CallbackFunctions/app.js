var fs=require('fs');

fs.readFile('data1.txt','utf-8',function(error,data){
    if(error){
        return console.error(error);
    }
    console.log(data);
});