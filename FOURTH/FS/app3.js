var fs = require('fs');
var data = 'some file data';

fs.writeFile(__dirname+"/data.txt",data,{
        flag:'wx'
    },function(error){
        if(error){
            return console.error(error.message);
        }
    });