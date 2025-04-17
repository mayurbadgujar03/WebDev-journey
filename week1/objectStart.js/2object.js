// Questions

// Problem: Create an object representing a type of tea with properties for
const teas = {
    name: "Lemon tea",
    type: "Green",
    caffined: "low",

}

// Problem: Access and print the name and type properties of the tea object.
// console.log(teas.name);
// console.log(teas.type);

//Problem: Add a new property origin to the tea object.
teas.origin = "china";
// console.log(teas.origin);

//Problem: Change the caffeine level of the tea object to "Medium".
teas.caffined = "Medium";
// console.log(teas.caffined);

//Problem: Remove the type property from the tea object.
delete teas.type;
// console.log(teas);

//Problem: Check if the tea object has a property origin.
// if('origin' in teas) { console.log(true) }
// if(teas.hasOwnProperty('origin')) { console.log(true) }
// if(teas?.origin) { console.log(true) }

//Problem: Use a for...in loop to print all properties of the tea object.
for (const tea in teas) {
    // console.log(tea, teas[tea]);
}
Object.entries(teas).forEach(([key, value]) => {
    // console.log(key, value);
})
for (const [key, value] of Object.entries(teas)) {
    // console.log(key, value);
}

//Problem: Create a nested object representing different types of teas and their properties.
teas.black = {
    origin: 'India',
    type: 'Assam'
}
teas.green = {
    origin: 'India',
    type: 'Assam'
}
// console.log(teas);