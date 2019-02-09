var Emitter = require('./emitter');

var emtr = new Emitter();

emtr.on('greet',function(){
    console.log('Somewhere, someone said hello');
});
emtr.on('greet',function(){
    console.log('A greeting occured.')
});


emtr.on('work',function(){
    console.log("Pankaj is Working");
});
emtr.on('work',function(){
    console.log("Punit is Working");
});
emtr.on('work',function(){
    console.log("Pooja is Working");
});
emtr.on('work',function(){
    console.log("Sunil is Working");
});

console.log('Hello');
emtr.emit('greet');
console.log('Bye');

console.log();
emtr.emit('work');