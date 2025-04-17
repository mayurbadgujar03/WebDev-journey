// Online School System

//Constraints
// name should be a string
// age should be a positive integer greater then 5
// grade should be a string like "1oth", "12th", etc.
// return "Invalid input" for wrong inputs

function createStudentProfile(name, age, grade) {
    // Return an object with name, age, and grade

    // let test = typeof(name)
    // console.log(test, typeof(test));
    
    if(typeof(name) !== "string" || name.length === 0) return "Invalid input name";
    if(age < 0 || age <= 5) return "Invalid input age";
    if(typeof(grade) !== "string") return "Invalid input grade";

    const user = {
        name: name,
        age: age,
        grade: grade
    }

    return user
}

let res1 = createStudentProfile("John", 5, "1st");
// console.log(res1);


// Developing a car rental service

// Constraints
// car should be a valid object with at least brand and model properties
// color should be a non-empty string, otherwise return "Invalid color"

function addCarColor(car, color) {
    // Add color property to the car object
    if (color !== undefined && color !== null){
        if (color.length === 0) return "Invalid color";
    } else {
        return "Invalid color"
    }

    car.color = color;

    return car
}

let res2 = addCarColor({brand: "Toyota", model: "Corolla"}, undefined);
// console.log(res2);



// An online shopping platform

// Constraints
// product should be a valid object


function hasDiscount(product) {
    // Check if product has discount property

    if(product.hasOwnProperty('discount')) {
        return true
    } else {
        return false
    }
}

let res3 = hasDiscount({name: "Laptop", price: 1000, discount: 10});
// console.log(res3);


// For security reasons

// Constraints
// user should be a valid object with at least a username and password
// if password does not exist, return the object as it is.


function removePassword(user) {
    // Remove password property
    if (user.hasOwnProperty("password")){
        delete user.password;
        return user
    } else {
        return user
    }
}

let res4 = removePassword({username: "Mayur", password: "kuchBhiTimePass"});
// console.log(res4);



// Analying user data in a database

// Constraints
// user should be a valid object.
// if the object is empty, return 0

function countProperties(user) {
    // Return the number of properties in user
    let propertiesCount = 0;
    for (const prop in user) {
        propertiesCount++
    }
    return propertiesCount;
}

let res5 = countProperties({name: "mayur", age: 23, email: "mayur.learning@gmail.com"})
// console.log(res5);


// System that stores user profile information from multiple sources.

// Constraints
// Both inputs should be valid objects
// If an object is empty, rturn the other object as it is
// If both objects are empty, return {}

function mergeObjects(obj1, obj2) {
    // Merge obj1 and obj2 into a single object
    if (obj1.length === 0) return obj2 ;
    if (obj2.length === 0) return obj1 ;
    if (obj1.length === 0 && obj2.length === 0) return {};

    let merged = {...obj1, ...obj2}
    return merged;
}

let res6 = mergeObjects({name: "Mayur", age: 18}, {age: 19, email: "mayur.learning@gmail.com"});
// console.log(res6);



// System that stores product details in an onject

// The input should be a valid object
// if the object is empty, return an empty array.

function objectToArray(obj) {
    // Convert the object into an array of key-value pairs
    // let arr = Object.keys(obj).map((key) => [key, obj[key]]);
    let arr = Object.entries(obj);
    return arr;
}

let res7 = objectToArray({name: "mayur", age: 19});
// console.log(res7);


// Web Application

// Constraints
// The input should be a valid object
// if the object has no valid properties left, return {}

function cleanObject(obj) {
    // Remove all properties with null or undefined values
    for (const key in obj) {
        if(obj[key] == null || obj[key] == undefined) {
            delete obj[key]
        }
    }
    return obj;
}

let res8 = cleanObject({name: "mayur", age: "19", email: undefined});
// console.log(res8);



// Web application where objects contain nested properties

// Constraints
// The input should be a valid object
// The function should work wuth nested objects and arrays inside objects
// The function should not modify the original object

function deepClone(obj) {
    // Return a deep copy of obj
    let objCloned = {...obj}
    return objCloned;
}

let res9 = deepClone({name: "mayur", age: "25", address: {city: "pune", zip: "100001"}})
// console.log(res9);


// In many applications, data is stored in deeply nested objects.

//Constraints 
// the input object should be valid.
// the key path should be a string with dot notation (.) separating keys.
// if a key is missing, return "Key not found"
// the function should handle deeply nested objects

function getNestedValue(obj, keyPath) {
    // Return the value from the nested object based on keyPath
    let res = keyPath.split('.').reduce((acc, key) => acc?.[key], obj);
    if (res === undefined) {
        return "Key not found"
    }
    return res
}

let res10 = getNestedValue({user: {address: {city: "new york"}}}, "user.address.citys");
console.log(res10);