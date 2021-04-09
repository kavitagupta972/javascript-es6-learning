function Animal(name, age){
    this.name = name;
    this.age = age;
}

var obj1 = new Animal("OBJ1", 20);
var obj2 = new Animal("OBJ2", 15);
console.log(obj1);
console.log(obj2);

Animal.prototype.canEat = function(){
    console.log('Animal ' + this.name + ' can eat');
}
Animal.prototype.height = 26;
obj1.canEat();
obj2.canEat();

function Human(name, age, occupation){
   Animal.call(this, name, age);
    this.occupation = occupation;
}

Human.prototype.printOccupation =  function(){
    return this.name + " has "+ this.occupation+" occupation";
}

var kavita = new Human("kavita", 30, "Trainer");
console.log(kavita);
Human.prototype.__proto__ = Animal.prototype; //inheritance 
kavita.canEat();
console.log(kavita.printOccupation());