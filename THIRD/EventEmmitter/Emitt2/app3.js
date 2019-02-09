var Emitter = require('./emitter');
var eventConfig = require('./config').events;
var emtr = new Emitter();

//Event GREET
emtr.on(eventConfig.GREET,function(){
    console.log('Somewhere, Someone said Hello');
});
emtr.on(eventConfig.GREET,function(){
    console.log('Greeting Ocurred');
});




console.log('Hello');
emtr.emit(eventConfig.GREET);
console.log('Bye');
