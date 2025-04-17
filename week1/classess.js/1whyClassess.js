// 🧠 PROBLEM: Why Classes?

let user1 = {
    fname: "Mayur",
    lname: "Badgujar",
    getName() {
        console.log(`${this.fname} ${this.lname}`);
    }
}

let user2 = {
    fname: "Prerana",
    lname: "Bhoi",
    // No getName()! Can't reuse from user1
}

// user1.getName();
// user2.getName(); // to run this i need to add that function again ( which will come in DRY principle )
// To use that same function i need to copy it and use it again.
// What if there are 20+ users on plathform then i have to copy 20+ times.

// To solve this problem:-

// Classes (ES6) in the Game

class Person {
    constructor(fname, lname) {
        this.firstName = fname;
        this.lastName = lname;
    }

    getFullName() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

const p1 = new Person("Mayur", "Badgujar");
const p2 = new Person("Prerana", "Bhoi");

// p1.getFullName();
// p2.getFullName();

// 🛠 What If You Don’t Add a Constructor?

class Animal {
    // no constructor 
    speak() {
        console.log("Woof!");
    }
}

let dog = new Animal();
// dog.speak();  // "woof!"

// JavaScript automatically adds a default empty constructor:
// constructor() {}