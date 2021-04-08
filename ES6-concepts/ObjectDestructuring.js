// console.log("Object Destructuring !!!");
// let student = {
//     name:"Jasleen",
//     stream: "computer applications",
//     rollno : 90
// }
// //before es6
// // let studentName = student.name;
// // let studentStream = student.stream;
// // let studentRollNo = student.rollno;

// // console.log(studentName);
// // console.log(studentStream);
// // console.log(studentRollNo);

// //after es6
// let {name, stream, rollno} = student;
// console.log(name);
// console.log(stream);
// console.log(rollno);

// let {name : studentName, stream1, rollno1} = student;
// console.log(studentName);
let student1 = {
    name:"Jasleen",
    stream: "computer applications",
    rollno : 90,
    address : {
        houseno : "34",
        country : "Malaysia"
    }
}

let {
    stream,
    name ,
    rollno,
    address : {houseno, country},
    address
} = student1;

console.log(name);
console.log(stream);
console.log(houseno);
console.log(country)
console.log(address);
console.log(student1);














