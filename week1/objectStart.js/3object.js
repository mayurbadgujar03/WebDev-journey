// Nested Objects - Objects inside other objects — perfect when data gets a bit complex.


let person = {
    name: "Patil",
    address: {
        city: "Pune",
        pin: 411001
    }
};

// console.log(person.address.city);


// Methods Inside Objects - Function inside object = Method

const dog = {
    name: "Buddy",
    bark: function (){
        console.log("Woof!");
    },
    bark1(){
        console.log("Woof2!");
    }
};

// dog.bark1();


// this keyword - Refers to the current object context

const car = {
    brand: "Tesla",
    getBrand() {
        return this.brand;
    }
}

// console.log(car.getBrand());

// Object Dastructing - Unpack object values into variables.
const book = {
    title: "Atomic Habits",
    author: "James Clear"
};

// const { title, author } = book;
// console.log(title);

// const { author, title } = book;
// console.log(title);

const book2 = {
    name: "Deep Work",
    writer: "Cal Newport"
};

// const {title, author} = book2
// console.log(title);
const {name: title, writer: author} = book2
console.log(title);