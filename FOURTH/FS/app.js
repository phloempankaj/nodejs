console.log('Current File with Path: '+__filename);
var fn = __filename.substring(__filename.lastIndexOf('\/')+1);
console.log("File Name:",fn);
console.log('It is located in '+ __dirname );
console.log('I am in : '+ process.cwd());