function changeValue(a){
    a=2;
    console.log('Inside:-');
    console.log('A = '+a);
}

var a=1;
console.log('Before:-')
console.log('A = '+a);
changeValue(a); // pass by value
console.log('After:-')
console.log('A = '+a);