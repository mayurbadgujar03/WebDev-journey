// Simulating Classes with Functions + Prototypes
// This is where real JavaScript BTS starts

class Person {
    constructor(fname, lname) {
        this.firstName = fname;
        this.lastName = lname;
    }

    getFullName() {
        console.log(`${this.firstName}, ${this.lastName}`);
    }
}

// Constructor function

function Person1(fname, lname) {
    this.firstName = fname;
    this.lastName = lname;
}

const user2 = new Person1 ("mayur", "Badgujar");
console.log(user2);  // Works !
 
// But user2.getFullName() will not ?

// Add Methods Manually to prototype

Person1.prototype.getFullName = function () {
    console.log(`${this.firstName} ${this.lastName}`);
}
user2.getFullName(); // works now !
const user3 = new Person1 ("Prerana", "Bhoi");
user3.getFullName(); // works now !
// This works because user1.__proto__ points to Person.prototype, and JS finds getFullName through prototype chain.

// Behind the Scenes

// this is what JS engine does secretly

let temp = {};  // create empty object
temp.__proto__ = Person.prototype;  // link proto chain
// Person.call(temp, "mayur", "badgujar");
// return temp; 

// Full hacky version without class

function Person3(fname, lnmae) {
    this.fname = fname;
    this.lname = lnmae;
}

Person3.prototype.getFullName = function () {
    console.log(`${this.fname} ${this.lname}`);
};

const user4 = new Person3("Max", "Patil");
const user5 = new Person3("Max", "Jade");

console.log(user4);
console.log(user5);


// Check the BTS

console.log(user5.__proto__ === Person3.prototype); //true
console.log(user5.hasOwnProperty('getFullName')); // false (because it's in prototype)

