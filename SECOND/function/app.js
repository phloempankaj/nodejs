//function declaration
function greet(){
    console.log("Hi");
}
greet();




//Function are first-class
function logGreeting(fun){
    fun();
}
logGreeting(greet);




//function as expresssion
var greetMe=function(){
    console.log('Hello Pankaj');
}
greetMe();



//function in still first-class
logGreeting(greetMe);



//function express on the fly
logGreeting(function(){
    console.log('Hello Pankaj');
})
