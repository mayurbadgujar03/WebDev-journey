// The map() method is used to transform each element of an array into something else.
// It creates a new array with the results — without changing the original one.

// array.map((element, index, array) => {
//     return transformed element
// });

// Let's take a example

let num = [1, 2, 3];
let doubled = num.map(num => num * 2);

// console.log(doubled);

// Real - Life Example - Tea Names to Uppercase

let teas = ["Green Tea", "Black Tea", "white Tea"];
let uppercase = teas.map(tea => tea.toUpperCase());

// console.log(uppercase);

// map() vs forEach()

let max = [1, 2, 3];

let mapped = max.map(x => x * 2);
let forEachRes = [];

max.forEach(x => {
    forEachRes.push(x * 2)
})

// console.log(mapped);
// console.log(forEachRes);

// QUESTIONS 

// Mapping tea names to lengths?
// Goal: Convert each tea name to its number of characters.

let allTeas = ["Green Tea", "Black Tea", "Herbal Tea"];

let lengthOfAllTeas = allTeas.map(tea => tea.length);
// console.log(lengthOfAllTeas);

// Mapping a number array to even/odd strings?
// Goal: Check each number and return "Even" or "Odd" instead of the number.

let nums = [1, 2, 3, 4];

let numsEvenOdd = nums.map(num => num % 2 === 0 ? "Even" : "Odd" );
// console.log(numsEvenOdd);

// Mapping an array of objects?
// Goal: Take an array of objects and extract or change one specific property.

let users = [
    { name: "Patil", age: 20 },
    { name: "Mail", age: 25 },
    { name: "Jade", age: 30 }
];

let onlyUserNames = users.map(user => user.name);
let userNameAge = users.map(user => `${user.name} is ${user.age} years old`);
// console.log(userNameAge);
// console.log(onlyUserNames);
