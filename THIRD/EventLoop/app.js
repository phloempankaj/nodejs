console.log("FIRST 1");
setTimeout(function(){
    console.log("SECOND 1");
    setTimeout(function(){
        console.log("THIRD 1");
        console.log("THIRD 2");
    });
    console.log("SECOND 2");
});
console.log("FIRST 2");