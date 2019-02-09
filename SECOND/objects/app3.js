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


    