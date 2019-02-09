var greetings = require('./greetings.json');

var greet=function(){
    console.log(greetings.hn);
}

module.exports=greet;