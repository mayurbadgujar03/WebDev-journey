// The filter() method creates a new array with all elements that pass a test (i.e., return true from a callback function).
// It does not modify the original array.

// Syntax 
// array.filter((element, index, array) => {
    // return true to keep the element
// });

//Exmaples - It keeps only the numbers greater than 20

let num = [10, 20, 30, 40, 50];

let filtered = num.filter(num => num > 20);

// console.log(filtered);

//Let's say you want to remove  30 from an array

let number = [10, 20, 30, 40, 50];

let filterRemoved = number.filter(number => number !== 30);

// console.log(filterRemoved);

// Real-life Exmaple(Todo App)

let todos = [
    { id: 1, task: 'Code', done: false },
    { id: 2, task: 'Gym', done: true },
    { id: 3, task: 'Sleep', done: false }
];

let pending = todos.filter(todo => !todo.done);

// console.log(pending);

// Only Even numbers

let evenOdd = [1, 2, 3, 4, 5, 6, 7, 8];

let onlyOdd = evenOdd.filter(num => num % 2 == 0)

// console.log(onlyOdd);

// Strings longer than 5 letters?
let str = ["max", "om", "neha", "prerana", "mukulBhai", "hiteshSir", "piyushSir", "mayur", "vijay"];

let longStr = str.filter(str => str.length >= 5);

// console.log(longStr);