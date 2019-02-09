'use strict'

var obj={
    name:'pooja',
    age:23
};


console.log(obj);
console.log();

var propdesc = Object.getOwnPropertyDescriptor(obj,'name');
console.log(propdesc);
console.log();

obj.name="punit";
console.log(obj);


Object.defineProperty(obj,'name',{configurable:false});
obj.name="kavita";
console.log(obj);
console.log();

Object.defineProperty(obj,'name',{writable:false});
console.log(obj);

Object.defineProperty(obj,'name',{writable:true});
console.log(obj);