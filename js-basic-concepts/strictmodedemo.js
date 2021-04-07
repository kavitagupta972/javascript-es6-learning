// IMMEDIATELY INVOKED FUNCTION EXPRESSION - IIFE

// function printMessage(ddd){
//    console.log("welcome to the world of javascript");
// }

//printMessage(kkk);

var message = "welcome to the world of javascript";
(function (msg){
   console.log(msg);
})(message);
