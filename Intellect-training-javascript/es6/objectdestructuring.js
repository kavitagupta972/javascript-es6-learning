// console.log("object destructuring");
// let student = {
//     name: "Jaspreet",
//     dept: "computer applications",
//     rollno: 20
// }
// // const studentName = student.name;
// // const dept = student.dept;
// // const rollno = student.rollno;
// // console.log(studentName, dept, rollno);
// const { name: studentName, dept, rollno } = student;
// console.log(studentName, dept, rollno);
let student1 = {
    name: "Jaspreet",
    dept: "computer applications",
    rollno: 20,
    address: {
        state: "Punjab",
        country: "India"
    }
}

let { name, dept, rollno, address, address: { state, country } } = student1;

console.log(name);
console.log(state);
console.log(address);