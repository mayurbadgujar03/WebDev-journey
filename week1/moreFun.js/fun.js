// reduce()
// array.reduce((acc, cur, index, array) => { ... }, initialValue);

let arr = [1,2,3];
let res = arr.reduce((acc, cur, index, arr) => {
    // console.log(cur, index, arr);
    return acc + cur
}, 0);
// console.log(res);


// find() / findIndex()
//  find() returns the first matching item.
// findIndex() gives the index of that item.

let num = [10, 20, 30];
let findNum = num.find(x => x > 15);
let findIndexOfNum = num.findIndex(x => x > 15)
// console.log(findNum);
// console.log(findIndexOfNum);


// some() & every()
// some() → returns true if any item matches.
// every() → returns true if all items match.

let num1 = [10, 20, 30];
let num2 = [10, 20, 30];

let num1Some =  num1.some(x => x > 20);
let num2Every = num2.every(x => x > 0);

// console.log(num1Some);
// console.log(num2Every);


// Flat() / FlatMap()
// Used to flatten nested arrays.

let flatArray = [[1, 2], [3, 4]].flat(); // [1, 2, 3, 4]


// sort() with custom compare

let sorted = [5, 1, 10].sort((a, b) => a - b);

// console.log(sorted);

// Destructuring Arrays
// Extract items from an array like:

let [a, b] = [10, 20];
// console.log(a);
// console.log(b);


// Chaining Array Methods
// Combine filter + map, map + reduce, etc.

let mixed = [1, 2, 3, 4, 5]
                .filter(x => x > 2)
                .map(x => x * 10);  // [30, 40]


// Array.from() / Array.isArray()

// Array.from() → turns iterable into array.
// Array.isArray() → checks if value is an array.

let arrayedFrom = Array.from('hello');
console.log(arrayedFrom);

let check = Array.isArray([1, 2, 3]); // true
console.log(check);
