var Person={
    firstname:'<no first name >',
    lastname:'<no last name>',
    show:function(){
        return(this.firstname+' '+this.lastname);
    }
}

function person(){
    this.firstname='<no first name >';
    this.lastname='<no last name>';
    this.show=function(){
        return(this.firstname+' '+this.lastname);
    }
}

var p1 = Person;
p1.firstname="pankaj";
p1.lastname="singh";
console.log(p1.show());
console.log();

var p2 = new Object();
p2.firstname="pooja";
p2.lastname="singh";
p2.show = function(){
    return(this.firstname+' '+this.lastname);
};
console.log(p2.show());

console.log();
var p3 = Object.create(Person);
p3.lastname="sharma";
console.log(p3.show());

console.log();
var p4 = new person();
p4.firstname="indu";
p4.lastname="bala";
console.log(p4.show());

console.log()
console.log(p1.show());