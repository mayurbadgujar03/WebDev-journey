// Let's play around with JS splice method
//Add, remove, or replace elements in an array.

//Syntax: array.splice(start, deleteCount, item1, item2, ...)

const example = [1, 2, 3, 4, 5];

//Exmaples
// 1. Removing elements
example.splice(2, 2);
console.log(example);

//2. Adding elements
example.push(2, 3, 4, 6);
example.splice(2, 0, 9, 8);
console.log(example);

//3. Replacing elements
example.splice(1, 2, 'a', 'b');
console.log(example);