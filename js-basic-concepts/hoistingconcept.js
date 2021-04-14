console.log("HOISTING!!!!");
console.log(a);
var a = 10;
console.log(a);

printHello();
function printHello(){
    console.log("hello reactjs");
}

printHello();