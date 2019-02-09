function greeter(){
    this.greetings="Hello!!!";
    this.greet=function(){
        console.log(this.greetings);
    }
}

//var obj = new greeter(); //Object Create of greeter class
//obj.greet();
module.exports = new greeter();