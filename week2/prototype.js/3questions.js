// challenge
// Imagine you're building a zoo app.
// Implement a constructor function Animal that initializes the name property.
// Attach a method makeSound to its prototype that returns "Some generic sound".
function Animal(name) {
    // Initialize name property
    this.name = name;
}
// Define makeSound method on Animal's prototype
Animal.prototype.makeSound = function () {
  return "Some generic sound";
}
const sound = new Animal("Dog");
// console.log(sound.makeSound());


//challenge
// You're building a smart home robot.
// Implement a constructor function Robot that initializes name and batteryLevel.
// Attach a method charge() to its prototype that increases batteryLevel by 20, ensuring it does not go above 100.
function Robot(name, batteryLevel) {
  // Initialize name and batteryLevel properties
  this.name = name;
  this.batteryLevel = batteryLevel;
}
// Define charge method on Robot's prototype
Robot.prototype.charge = function () {
  // this.batteryLevel = this.batteryLevel + 20
  Math.min((this.batteryLevel) + 20, 100)
  // if(this.batteryLevel > 100) {
    // this.batteryLevel = 100;
    // return this.batteryLevel;
  // }
  return this.batteryLevel;
}
const robo1 = new Robot("max", 100);
// console.log(robo1.charge());




//challenge
// You're building a digital click counter.
// Implement a counter function counter that initializes count to 0.
// Attach increment() and decrement() methods to the prototype.
function Counter() {
  // Initialize count property
  this.count = 0;
}
// Define increment method on Counter's prototype
Counter.prototype.increment = function() {
  this.count = this.count + 1
  return this.count
}
// Define decrement method on Counter's prototype
Counter.prototype.decrement = function() {
  this.count = this.count - 1
  return this.count
}
const num = new Counter();
// console.log(num.increment());



// challenge
// A music app feature: manage playlist.
// implement a constructor function playlist that initializes an empty songs array
// Attach a method addSong(song) to its prototype that adds the song to the songs array.
function Playlist() {
    // Initialize songs property
    this.songs = [];
}
// Define addSong method on Playlist's prototype
Playlist.prototype.addSong = function (song) {
  this.songs.push(song);
  return this.songs
}
let song1 = new Playlist();
// console.log(song1.addSong("Tum Hi Ho - Aashiqui 2"));


// challenge
// You're building a shopping cart.
// implement a constructor function ShoppingCart that initializes an empty items array
// attach addItem(price) to the prototype to add items
// attach getTotalPrice() to calculate the total price of items
function ShoppingCart() {
  // Initialize items property
  this.items = [];
}
// Define addItem method on ShoppingCart's prototype
ShoppingCart.prototype.addItem = function (price) {
  this.items = price;
}
// Define getTotalPrice method on ShoppingCart's prototype
ShoppingCart.prototype.getTotalPrice = function () {
  // let total =  0
  let total = this.items.reduce((acc, item) => acc + item, 0)
  // let total = this.items.forEach((item) => {
  //   return item + item
  // })
  // for (let i = 0; i < this.items.length; i++) {
  //   total = total + this.items[i]
  // }
  return total
}
let cart = new ShoppingCart();
cart.addItem([10, 20, 30]);
console.log(cart.getTotalPrice());


// Challenge 
// A banking system.
// Implement BankAccount constructor with balance and transactions. 
// Attach deposit (amount), withdraw (amount), and get TransactionHistory() methods to the prototype.
function BankAccount(balance) {
  // Initialize balance and transactions properties
  this.balance = balance
  this.transactions = []
}

// Define deposit method on BankAccount's prototype
BankAccount.prototype.deposit = function(amount){
this.balance += amount
// this.transactions.push(`Deposited ${amount}`)
}

// Define withdraw method on BankAccount's prototype
BankAccount.prototype.withdraw = function(amount){

if(this.balance < amount){
  this.transactions.push("Insufficient balance")
  return "Insufficient balance"
} else{
  this.balance -= amount;
  this.transactions.push(`Withdrew ${amount}`)
}
}

// Define getTransactionHistory method on BankAccount's prototype
BankAccount.prototype.getTransactionHistory = function () {
return this.transactions;
}

let mayur = new BankAccount(1000);
mayur.withdraw(200);
mayur.withdraw(500);
mayur.deposit(400);
// console.log(mayur.getTransactionHistory());



// Challenge 
// HR management software.
// Implement Employee constructor with name, position, and salary 
// Attach applyBonus (percent) to the prototype to increase salary.


function Employee(name, position, salary) {
  // Initialize name, position, and salary properties
  this.name = name;
  this.position = position;
  this.salary = salary;
}

// Define applyBonus method on Employee's prototype
Employee.prototype.applyBonus = function (perecent) {
this.salary = (this.salary + (this.salary / 100) * perecent)
return this.salary
}

let user1 = new Employee("mayur", "Manager", 45000);
// console.log(user1.applyBonus(8));



// Challenge 
// Build a digital library.
// Implement Library constructor with a books array. 
// Attach addBook (book) and findBook(title) methods to the prototype.


function Library() {
  // Initialize books property
  this.books = [];
}
// Define addBook method on Library's prototype
Library.prototype.addBook = function (book) { 
  this.books.push(book)
}
// Define findBook method on Library's prototype
Library.prototype.findBook = function (title) {
  let res = this.books.includes(title) ? "Book found" : "Book not found"
  return res;

// for(let i = 0; i < this.books.length; i++) {
//   // if(this.books[i] == toFind){
//   //   return "Book found"
//   // } else {
//   //   return"Book not found"
//   // }
// }
}

let books = new Library();
// books.addBook("1984", "Harry Potter", "The Hobbit");
books.addBook("1984");
books.addBook("Harry Potter");
books.addBook("The Hobbit");
// console.log(books.findBook("1984"));


// Challenge 
// Create BankAccount with transfer feature.
// Implement BankAccount constructor with accountNumber, holderName, and balance. 
// Attach deposit (amount), withdraw (amount), and transfer (amount, targetAccount) methods to the prototype.


function BankAccount(accountNumber, holderName, balance) {
  // Initialize accountNumber, holderName, and balance properties
  this.accountNumber = accountNumber;
  this.holderName = holderName;
  this.balance = balance;
}

// Define deposit method on BankAccount's prototype
BankAccount.prototype.deposit = function (amount) {
  this.balance += amount
}
// Define withdraw method on BankAccount's prototype
BankAccount.prototype.withdraw = function (amount){
  if(this.balance >= amount) {
    this.balance -= amount
  }
  // console.log([this.balance]);
}
// Define transfer method on BankAccount's prototype
BankAccount.prototype.transfer = function (amount, targetAccount) {
  if(this.balance >= amount) {
    this.balance -= amount
    targetAccount.deposit(amount);
    // console.log([this.balance, targetAccount.balance]);
  }
}

let userB1 = new BankAccount(101, "mayur", 700);
let userB2 = new BankAccount(102, "prerana", 400);

// userB1.deposit(100);
// userB2.deposit(0);
userB1.transfer(300, userB2);

// Challenge 
// You’re building an inventory app.
// Implement the Product constructor with name, price, and stock properties. 
// Attach applyDiscount (percent) and purchase (quantity) methods to the prototype (for memory efficiency). 
// Ensure integer values for price after applying a discount. 
// Handle edge cases like zero stock or excessive purchases.
function Product(name, price, stock) {
  // Initialize name, price, and stock properties
  if (price < 0 || stock < 0) {
    return "Entern valid data, negative integers are not allowed";
  }
  this.name = String(name);
  this.price = price;
  this.stock = stock;
}

// Define applyDiscount method on Product's prototype
Product.prototype.applyDiscount = function(perecent) {
  this.price = ( this.price - ( ( this.price / 100 ) *  perecent));
  Math.round(this.price);
}

// Define purchase method on Product's prototype
Product.prototype.purchase = function (quantity) {
  if(this.stock >= quantity) {
    this.stock -= quantity;
    return this.stock
  } else {
    return "Not enough stock";
  }
}

let pro1 = new Product ("laptop", 200, 15);
pro1.applyDiscount(25)
