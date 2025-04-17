// An object is a collection of key-value pairs -- it lets you group data together in a meaningful way.
const user = {
    name: "Patil",
    age: 21,
    isLoggedIn: true
};
// Key = "name", "age", "isLoggedIn"
// Values = "Patil", 21, true


// Accessing and Changing Object Properties

// console.log(user.name);
// console.log(user["age"]);

user.age = 22;           // Mpdify
user.city = "Pune";      // Add
delete user.isLoggedIn   // Delete

// console.log(user);


// Stack vs Heap ( Memory )

// STACK - Used for primitive data types (numbers, strings, booleans, etc.) - Stored by value

let a = 10;
let b = a; // b gets a "copy" of 10
b = 20;

// console.log(a); // 10 ( original doesn't change )
// console.log(b); 


// HEAP - Used for non-primitives (objects, arrays, functions) - Stored by reference

let obj1 = { name: "Patil" }
let obj2 = obj1; // both point to the SAME object in heap
obj2.name = "Mail";

// console.log(obj1.name); // "Mail" (both are connected)
console.log(obj2.name);


// How to Clone or Copy an Object (Important)

let user1 = {
    name: "Patil",
}

// ❌ Not a copy! Just a reference
let user2 = user1;

// ✅ Shallow copy
let user3 = { ...user1 };

// ✅ Or:
let user4 = Object.assign({}, user1)

user3.name = "user3";
user4.name = "user4";

// console.log(user1.name);
// console.log(user2.name);
// console.log(user3.name);
// console.log(user4.name);


let objs = {
    name: "Patil", 
    skills: ["JS", "HTML"]
}
let obje = objs;
obje.name = "max"
console.log(objs);
console.log(obje);
