let obj = "Object value";

const car = { color: "White", model: "Hyndai i20", type: "xyz" }; //object literal
console.log(car);
car.color = "Grey";
console.log(car.color);
// var emp = new Object(); // new Object
// emp.id = 100;
// emp.name = "Kavita";
// emp.organisation = "Intellect";
// console.log(emp);
//object constructor
//blue print
function emp(id, firstname, lastname, salary) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.salary = salary;
    this.getName = function printName() {
        return firstname + lastname;
    }
}
let emp1 = new emp("101", "Kavita", " Intellect", "1");
let emp2 = new emp("102", "Aman ", " Intellect", "2");
let emp3 = new emp("103", "Ankit", " Intellect", "3");
console.log(emp3.getName);