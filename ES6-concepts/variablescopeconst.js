// console.log("var a", varA);
// var varA = 100;
// console.log("var a", varA);

// //console.log("const a", constA);
// const constA = 22;
// console.log("const a", constA);

// const constA = 99; //syntax error redeclaration breaks at the start
//  constA = 99; //type error assignment to constant variable it breaks after the execution of code before this line.

const emp = { name:"kavita", id : 34} //obj1

console.log(emp);
//emp = { name : "Gupta", id :  21} //obj2 ERROR type error

emp.name = "gupta";
emp.id = 999;
console.log(emp);