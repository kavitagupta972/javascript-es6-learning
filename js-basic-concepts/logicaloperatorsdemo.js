
 var x = 100;
var y = 50;
var age = 25;
console.log("using logical operators");
// and(&&), or(||) , not(!)

//(x>10 )

if( (age >= 18) && (age <= 30)){
   console.log("i am eligible for voting");
} else{
   console.log("i am not eligible for voting");
}

if( (x >= 18) && (y <= 10)){
   console.log("i am eligible for voting");
} else{
   console.log("i am not eligible for voting");
}

if( (x >= 18) || !(y <= 10)){  // !(y <= 10)
   console.log("i am eligible for voting");
} else{
   console.log("i am not eligible for voting");
}