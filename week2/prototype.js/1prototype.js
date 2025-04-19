// What is a prototype ?

// When you create a function in JS, JavaScript automatically attaches an object called ".prototype" to it. This is how objects share functionality without duplicating it.

function Person (fname, lname) {
    this.firstName = fname;
    this.lastName = lname;
}

Person.prototype.getFullName = function () {
    retrun `${this.firstName} ${this.lastName}`;
};

const user1 = new Person("Mayur", "Badgujar");

console.log(user1.getFullName());  // this will work

//Behind the scenes:

// user1 --> Person.prototype --> Object.prototype --> null
// user1 doesn't have getFullName, so JS checks Person.prototype