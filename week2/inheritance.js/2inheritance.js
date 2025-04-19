// Basic Example: Animal -> Dog

// Base/parent class
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak () {
        console.log(`${this.name} makes a sound`);
    }
}

// child class
class Dog extends Animal {
    constructor(name, breed) {
        super(name); // super = calls parent construtor
        this.breed = breed;
    }

    bark() {
        console.log(`${this.name} barks!`);
    }
}

// create instances
const dog1 = new Dog("Tommy", "Labrador");

dog1.speak();
dog1.bark();




// 
class vehicle {
    constructor (brand) {
        this.brand = brand
    }

    drive() {
        console.log(`${this.brand} is driving...`);
    }
}

class ElectricCar extends vehicle {
    constructor (brand, battery) {
        super(brand);
        this.battery = battery;
    }

    charge() {
        console.log(`${this.brand} is charging (${this.battery}%)`);
    }
}

const cycle = new ElectricCar("Hero", 93.2);

cycle.drive();
cycle.charge();



// collaboration platform

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    login() {
        console.log(`${this.name} logged in.`);
    }

    logout() {
        console.log(`${this.name} logged out.`);
    }
}

class Admin extends User {
    constructor(name, email, role) {
        super (name, email);
        this.role = role;
    }

    deleteUser(user){
        console.log(`${this.name} deleted user: ${user.name}`);
    }
}

class Moderator extends User {
    flagConetnt(contentId) {
        console.log(`${this.name} flagged content: ${contentId}`);
    }
}

class Guest extends User {
    constructor(name, email, expiry) {
        super(name, email);
        this.expiry = expiry;
    }

    accessLimitedContent() {
        console.log(`${this.name} accessd limited content (expires in ${this.expiry} gays )`);
    }
}

const admin1 = new Admin("Mayur", "mayur@example.com", "SuperAdmin");
const guest1 = new Guest("Prerana", "prerana@exmaple.com", 3);
const checker = new Moderator;

checker.flagConetnt("3213eeer13213eqw");
admin1.login();  // mayur logged in
guest1.login();  // prerana logged in
admin1.deleteUser({ name: "Pratik" });  // mayur deleted user: Pratik
admin1.logout();  // mayur logged out

guest1.accessLimitedContent();
guest1.logout();  // mayur logged out

