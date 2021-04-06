console.log("object demos");

function Employee(fname, lname, age, occupation, country){
    this.firstname = fname;
    this.lastname = lname;
    this.age = age;
    this.occupation = occupation;
    this.country = country;
    this.height = 5;
    this.getName = function() {
        return this.firstname +" "+this.lastname;
    }
    this.setSalary = function(salary) {
        this.salary = salary;
    }
}

var emp1 = new Employee("Kavita", "Gupta", 30, "Trainer", "India");
var emp2 = new Employee("abc", "Gupta", 20, "developer", "India");
console.log(emp1);
// console.log(emp1.getName());
// console.log(emp2.getName());
emp1.setSalary(999999);
console.log(emp1.salary);