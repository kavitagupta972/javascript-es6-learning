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

console.log("objectmethods file",this);
console.log(myObject.displayData());


