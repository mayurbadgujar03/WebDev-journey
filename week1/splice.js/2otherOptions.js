// Other Options (that don’t mutate the original array)

//slice() - makes a shallow copy of a portion of an array.

let arr = [1, 2, 3, 4, 5];
let arr2 = arr; // copying it in another vaiable
arr2 = arr.slice(1, 4); // make the changes where you want to !

// console.log(arr2);

//filter() - removes items based on condition.

let max = [1, 2, 3, 4];
let res = max.filter(x => x !== 3);

// console.log(res);

// map() - transform elements.

let arrMap = [2, 4, 6];
let newMaped = arrMap.map(x => x * 2);

// console.log(newMaped);

// Spread Operator + slice/filter – to add/remove in immutable style.

let arrCombo = [10, 20, 30, 40];
// Insert 25 between 20 and 30.
// Remove 30 without changing the original array.

// Spread Operator - It spreads out the elements of an array.
let a = [1, 2];
let b = [...a, 3]; 
// console.log(b);

// Slice() ?

let arrSliceEx = [10, 20, 30, 40];
let part = arrSliceEx.slice(0, 2) // from index 0 to 2 (not including 2)
// console.log(part); 

// COMBO - Insert Item at Index 2 Without Mutating

let trial = [10, 20, 30, 40, 50];

let newTrial = [
    ...trial.slice(0, 3),
    25,
    ...trial.slice(3),
]
// console.log(newTrial);


// COMBO: Remove Item (say, remove 30 at index 2)

let removeArr = [10, 20, 30, 40];
let newRemovedArr = [
    ...removeArr.slice(0, 2),
    ...removeArr.slice(3)
]
console.log(newRemovedArr);