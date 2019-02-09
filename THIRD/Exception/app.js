var fs =require('fs');

try{
    fs.readFile('data.txt','utf-8',function(error,data){
        if(error){
            throw error;
        }
        console.log(data);
    });
}
catch(error){
    console.error('Caught are error');
}