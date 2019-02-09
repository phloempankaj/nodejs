var Emitter = require('./emitter');

var emtr = new Emitter();

//Event GREET
emtr.on('greet',function(){
    console.log('Somewhere, Someone said Hello');
});
emtr.on('greet',function(){
    console.log('Greeting Ocurred');
});


//Event WORK
emtr.on('work',function(){
    console.log('Pankaj is Working');
});
emtr.on('work',function(){
    console.log('Pinki is Working');
});
emtr.on('work',function(){
    console.log('Kapil is Working');
});
emtr.on('work',function(){
    console.log('Sunil is Not Working with Kapil');
});


console.log();
emtr.emit('greet');


console.log();
emtr.emit('work');

