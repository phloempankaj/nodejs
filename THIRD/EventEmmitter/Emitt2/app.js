var Emitter = require('./emitter');

var emtr = new Emitter();

//Event GREET
emtr.on('greet',function(){
    console.log('Somewhere, Someone said Hello');
});
emtr.on('greet',function(){
    console.log('Greeting Ocurred');
});




console.log('Hello');
emtr.emit('greet');
console.log('Bye');
