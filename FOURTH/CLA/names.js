var names=["pankaj","amit","reeta","jatin","kriti"];

/*
for(i=0;i<5;i++){
    console.log(names[i]);
}
*/

/*
for(i=0;i<names.length;i++){
    console.log(names[i]);
}
*/

/*
names.forEach(function(item){
    console.log(item);
});
*/

process.argv.forEach(function(item){
    console.log(item);
});

