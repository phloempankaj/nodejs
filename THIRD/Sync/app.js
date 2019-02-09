var fs = require('fs');
var content="";
try 
{
  content = fs.readFileSync('data1.txt', 'utf-8');
  console.log(content);
} 
catch (ex) 
{
  //console.log(ex);
  console.log("File Not Found");
}
