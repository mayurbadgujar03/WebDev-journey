// Class Deep Dive

class Person {
    constructor(fname, lname) {
      this.fname = fname;
      this.lname = lname;
    }
    getFullName() {
      console.log(`${this.fname} ${this.lname}`);
    }
  }
  
const user1 = new Person("Mayur", "Badgujar");
 console.log( user1.prototype);
 console.log( user1.__proto__);
 console.log( Person.prototype);
 console.log(Object.getPrototypeOf(user1));
 

//  A new empty object {} is created in the heap
// this inside the constructor starts pointing to that empty object
// Properties are added to the object via this.fname, this.lname
// The object is linked to the prototype chain (__proto__)
// The memory address of this object is stored in stack with the name user1



// HEAP
// 📦 Class Blueprint (Person)
// |- constructor()
// |- getFullName() ⟶ [Function stored in prototype]


// 📦 Object { fname: "Mayur", lname: "Badgujar" }
// |- __proto__ --------------> Person.prototype

// STACK

// user1 ➝ 📦 (memory address pointing to object in Heap)