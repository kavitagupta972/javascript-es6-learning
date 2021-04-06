console.log("object demos");

function Employee(fname, lname, age, occupation, country){
    this.firstname = fname;
    this.lastname = lname;
    this.age = age;
    this.occupation = occupation;
    this.country = country;
    this.height = 5;
    console.log(this.occupation);
}

//Employee.height =  89; // not working
var emp1 = new Employee("Kavita", "Gupta", 30, "Trainer", "India");
var emp2 = new Employee("abc", "Gupta", 20, "developer", "India");
var emp3 = new Employee("xyz", "Gupta", 40, "Civil Engineer", "India");
var emp4 = new Employee("ijk", "Gupta", 30, "Trainer", "India");

console.log(emp1);
console.log(emp2);
console.log(emp3);
console.log(emp4);