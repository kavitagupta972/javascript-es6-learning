// console.log("Spread Concept of ES6");
// //Merging two or more arrays
// const summerFruits = ["water melon", "mango", "apricot"];
// const winterFruits = ["apple", "grapes", "pomegranate"];

// //before es6 
// // const fruits = summerFruits.concat(winterFruits);
// // console.log("fruits",fruits);
// console.log("summerfruits",summerFruits);

// //after es6
// const fruits = [...summerFruits,...winterFruits, ...["pineapple", "musk melon"], "plum"];
// console.log("summerfruits",summerFruits);
// console.log("fruits",fruits);

// passing array as function parameter

function add(a,b,c,d){
    return a+b+c+d;
}

// console.log(add(1,2,3));
// var arguments = [10,20,30];
// console.log(add(...arguments));
var args = [33,90];
// console.log(add(...args,100));
// console.log(add(100, ...args));
console.log(add(100, ...args, 11));
