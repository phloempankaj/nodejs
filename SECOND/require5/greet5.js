function greeter(){
    this.greetings="Hello!!!!";
    this.greet=function(){
        console.log(this.greetings);
    }
}

module.exports = greeter;