console.log("object demos");

var myObject = {
    name : "kavita", 
    age : 30, 
    occupation : "trainer",
    displayData: function(){
        console.log("myObject",this);
        return this.name + " " + this.age +" "+this.occupation;
    }
};

myObject.lastname = "gupta";
console.log(myObject);

// var myObjectValues = Object.values(myObject); //return array of values
// // console.log(myObjectValues);
// // console.log(typeof myObjectValues);

// var myObjectString = JSON.stringify(myObject);
// console.log(myObject);
// console.log(myObjectString);
// //stringify object

// myObject.displayData = myObject.displayData.toString();

// var objectString = JSON.stringify(myObject);
// console.log(objectString);

