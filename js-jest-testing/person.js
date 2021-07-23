class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    fullName(){
        return this.firstName + " "+this.lastName; //kavita gupta
    }
}

module.exports = Person;
