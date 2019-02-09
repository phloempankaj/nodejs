exports = function(){
    console.log('hello');
}

console.log(exports);
console.log(module.exports);
/*
module.exports ={
    id:1,
    name:"pankaj"
}
console.log(module.exports);
*/

module.exports = exports;