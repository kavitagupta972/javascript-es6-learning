console.log("object demos");


var myObject = {name : "kavita", age : 30, occupation : "trainer"};
console.log(myObject);
// console.log(myObject.name);
// console.log(myObject.age);
// console.log(myObject['occupation']);

for(attribute in myObject) {
    console.log(attribute);
    console.log(myObject[attribute]);
}

myObject.occupation = "developer";
console.log(myObject);

delete myObject.age;
console.log('updated object', myObject);
