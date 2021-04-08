var message = "Hi";
if(true){
    var message  = "Hi if block";
    console.log("message",message);
}

console.log("message",message);

let message1 = "Hi";
if(true){
    let message1  = "Hi if block";
    console.log("message1", message1);
}

console.log("message1",message1);
// console.log(a);
// var a = 10;
// console.log(a);
// // var a = 25;
// // console.log(a);


// // try{
// //     console.log("b "+b);
// // }catch(error){
// //     console.log("b is of let type. Cannot use before initialization");
// // }

// // let b = 100;
// console.log("b "+b);
// let b = 33;
// console.log("b "+b);
// //var is functional scope and let is block scope
// function varScope() {
//     //block scope
//     if(true){
//         var msg = "hello var scope";
//         console.log(msg);
//     }
//     console.log(msg);  
// }
// function letScope() {
//     //block scope
//     if(true){
//         let message = "hello var scope";
//         console.log(message);
//     }
//     console.log(message);  
// }
// //varScope();
// letScope();