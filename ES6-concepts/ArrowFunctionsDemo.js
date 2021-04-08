console.log("Arrow Functions Concept in ES6");

// //without arrow function
// let printMessage = function(message) {
//     return "hello javascript es6";
// }

// function printGreetings() {
//     return "javascript greetings"
// }
// console.log(printMessage("hello world"));
// console.log(printGreetings());

// let getGreetingMsg = () => "hello getGreetingMsg method";


let addition = () => {
    let sum = 10+20;
    return sum;
}
var getGreetingMsg = () => {
    return "hello getGreetingMsg method";
}
console.log(getGreetingMsg());
console.log('sum', addition());

let add = (x, y) => {
    let sum = x+y;
    return sum;
}

console.log("arrow function with parameters", add(1,99));
var printGreetings = (message) => {
    console.log( message);
}

var printGreeting = message => console.log( message);

printGreetings("hello es6 ");
printGreeting("hello es6 ");








