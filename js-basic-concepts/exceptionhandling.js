// // console.log(" Working on exception handling");

// //Reference error
// try{
//    console.log(temp);
// } catch(err) {
//    console.log("Error has occured");
// }
// console.log(" Working on exception handling");

// // Syntax Error
// eval("alert('syntax error example')");
// try {
//    eval("alert('syntax error example)");
// } catch (error) {
//    console.log(error.name +" " +error.message);
// }

//type error
// var number = 100;
// var message = "convert to upper case";
// try {
//    console.log(message.toUpperCase());
//    number.toUpperCase();
// } catch(error) {
//    console.log("Can not convert number to uppercase:::::::::" + error);
// }

var emp = {
   name : "Kavita",
   age : -20,
   salary : -50000
}

try{
   if(emp.age <0 || emp.salary <= 0) {
      throw "Age or salary of employee should not be negative";
   }
}catch(error) {
   console.log(error);
   //throw "throwing error from catch block";
} finally {
   console.log("I am inside finally block");
}
console.log("I am outside finally block");




















