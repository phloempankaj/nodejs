var english=function(){
    console.log('Hello');
}
var hindi=function(){
    console.log('Namaste');
}
var urdu = function(){
    console.log("Asslam walekum");
}
var greeting = function(){
    english();
    hindi();
    urdu();
}
module.exports =greeting;
