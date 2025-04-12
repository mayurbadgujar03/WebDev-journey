// Problem: Create an array containing different types of teas.
const teas = ["Green Tea", "Black Tea", "oolong Tea", "White Tea", "Herbal Tea"]

//Problem: Add "Chamomile Tea" to the existing list of teas
teas.push("Chamomile Tea");

// console.log(teas);

//Problem: Remove "Oolong Tea" from the list of teas.
const oolongIndex = teas.indexOf("oolong tea");
if(oolongIndex > -1){
    teas.splice(oolongIndex, 1);
}

// console.log(teas);

//Using splice we can also replace the element, Syntax :- array.splice(start, deleteCount, item1, item2, ...)
const chamomileIndex = teas.indexOf("Chamomile Tea");
if(chamomileIndex > -1){
    teas.splice(chamomileIndex, 1, "NormalChai");
}

// console.log(teas);

//Problem: Filter the list to only include teas that are caffeinated.
let onlyCaffeinated = teas.filter(x => x !== "Herbal Tea");

// console.log(onlyCaffeinated);

//Problem: Sort the list of teas in alphabetical order.
teas.sort();

// console.log(teas);

//Problem: Use a for loop to print each type of tea in the array.
for(let i = 0; i < teas.length; i++) {
    // console.log(teas[i]);
}

//Problem: Use a for loop to count how many teas are caffeinated (excluding "Herbal Tea").
let caffeinatedCount = 0;
for(let i = 0; i < teas.length; i++){
    if(teas[i] !== "Herbal Tea"){
        caffeinatedCount++
    }
}
// console.log(caffeinatedCount);


//Problem: Use a for loop to create a new array with all tea names in uppercase.
let upperCaseTeas = [];
for(let i = 0; i < teas.length; i++){
    upperCaseTeas.push(teas[i].toUpperCase());
}
// console.log(upperCaseTeas);

//Problem: Use a for loop to find the tea name with the most characters.
let mostCharactersTea = "";
for(let i = 0; i < teas.length; i++){
    if(teas[i].length > mostCharactersTea.length){
        mostCharactersTea = teas[i];
    }
}
// console.log(mostCharactersTea);

//Problem: Use a for loop to reverse the order of teas in the array.
let reversedTea = [];
for(let i = teas.length - 1; i >= 0; i--){
    reversedTea.push(teas[i]);
}
console.log(reversedTea);