function person(firstname,lastname){
    this.firstname=firstname;
    this.lastname=lastname;
}
person.prototype.greet=function(){
    console.log('Hi, '+this.firstname+' '+this.lastname);
}

var pankaj=new person("pankaj","singh");
pankaj.greet();

var pooja = new person("pooja","kapoor");
pooja.greet();


console.log(pankaj.__proto__);
console.log(pooja.__proto__);
console.log(pankaj.__proto__===pooja.__proto__);