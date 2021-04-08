console.log("classes concept of es6");
//before es6
function Student(name, roll, stream){
    this.name = name;
    this.rollno = roll;
    this.stream = stream;
    this.displayDetail = function() {
        return this.name +"  "+this.rollno+"  "+this.stream;
    }
}
let studentObj = new Student("Kavita", 87, "computer applications");
console.log(studentObj);
//after es6
class StudentDetail{
    constructor(name, rno, stream){
        this.name = name;
        this.rollno = rno;
        this.stream = stream;
    }
    displayDetail = function() {
        return this.name +"  "+this.rollno+"  "+this.stream;
    }
}

let studentDetailObj = new StudentDetail("Sachin", 101, "mechanical engineering");
console.log(studentDetailObj);
console.log("studentdetailobj::", studentDetailObj.displayDetail());
