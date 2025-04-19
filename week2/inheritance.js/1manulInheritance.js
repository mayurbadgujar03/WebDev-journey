// Constructor Function Inheritance – Manual Way

function Animal (name) {
    this.name = name;
}
Animal.prototype.speak = function () {
    console.log(`${this.name} makes a sound`);
}

//Inheriting Animal
function Dog(name, breed) {
    Animal.call(this, name); // Inherit properties
    this.breed = breed;
}
// Inherit prototype methods
Dog.prototype = Object.create(Animal.prototype);
// Reset the constructor
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
    console.log(`${this.name} barks!`);
}

const dog1 = new Dog("Rocky", "Beagle");
dog1.speak();
dog1.bark();