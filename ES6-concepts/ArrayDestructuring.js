console.log("Array Destructuring !!!");
const date = [1989, 12, 01];
console.log(typeof date);
//before ES6
const year = date[0];
const month = date[1];
const day = date[2];
console.log(year, month,day);

//after ES6 - destructuring of array into individual variables.

const [a, b, c] = date;
console.log(a, b, c);

const [year2, , day2] = date;
console.log(year2, day2);