// console.log("HOISTING!!!!");
printHello();
var a = 10;
// console.log(a);

// printHello();
function printHello(){
    var x = 100;
    console.log('a' , a);
    console.log('x', x);
}