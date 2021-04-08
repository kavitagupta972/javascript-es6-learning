//before ES6
const emp  = {
 name:"XYZ",
 age : "22",
 id:"11"
}
console.log(emp.id);

const name2 = "ABC";
const age = 30;
const id = 21;

// const emp1 = {
//     name : name1,
//     age : age,
//     id : id
// }

// console.log(emp1.name);

//after ES6
const emp2 = {name2, age, id};
console.log('emp2', emp2);