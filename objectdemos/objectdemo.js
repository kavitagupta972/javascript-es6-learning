console.log("object demos");

// name : "kavita"
// age : 30
// occupation : "trainer"

// //first way of creating object
// var myObject = {name : "kavita", age : 30, occupation : "trainer"};
// console.log(myObject);
// console.log(myObject.name);
// console.log(myObject.occupation);

//second way of creating object
var newObject = new Object();
console.log(newObject);
newObject.name = "Joe";
newObject.occupation = "frontend developer";
console.log(newObject);

var objectRef = newObject;
console.log('object reference',objectRef);
objectRef.name = "Balqis";