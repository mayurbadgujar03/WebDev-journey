// forEach() + manual push
// You can mimic filter() using a basic loop

let arr = [1, 2, 3, 4, 5];
let res = [];

arr.forEach(num => {
    if (num !== 2) res.push(num) 
});
// console.log(res);


// reduce()
// filtering + transforming in one pass

let arra = [1, 2, 3, 4, 5];

let filtered = arr.reduce((acc, val) => {
    if (val !== 2) acc.push(val);
    return acc;
}, []);
// console.log(filtered);

// splice() (for removing from original array)
// Unlike filter, splice() modifies the array in place.

let array = [1, 2, 3, 4];
array.splice(1, 1);
// console.log(array);

// delete operator (not reccommended for arrays)

let arr2 = [1, 2, 3];
delete arr2[1];

// console.log(arr2);

// find() (only gets the first match, not multiple like filter)

let arrs = [10, 20, 30];

let ress = arrs.find(num => num > 15);