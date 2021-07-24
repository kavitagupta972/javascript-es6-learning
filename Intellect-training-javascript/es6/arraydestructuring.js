console.log("Array destructuring");

const date = [2020, 10, 14];
// console.log(date);
// const year = date[0];
// const month = date[1];
// const day = date[2];

// console.log(year, month, day);
//after es6 - array destructuring
const [year, , day] = date;

console.log(year, day);