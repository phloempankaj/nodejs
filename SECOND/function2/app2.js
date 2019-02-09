function changeObject(a){
    a.prop1 = function() {};
    a.prop2 = {};
}

var a={};
a.prop1 ={};
console.log('Before:-');
console.log(a);

changeObject(a);

console.log('After:-');
console.log(a);

