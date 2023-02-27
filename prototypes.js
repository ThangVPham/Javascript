/*------ Prototypal Hierarchy ------*
               null
                |      
                ↓
              Object                                      
             prototype
                |
                |
             Function
             prototype
                |
  ______________|_______________
  |             |              |           
  ↓             ↓              ↓           
Array         String         Number              

(each has its own prototype along with inherited prototype which can be access using the pseudo property __proto__) 
(each passes down its properties and methods inside prototype to child's object/instance)
(__proto__ keyword accesses the parent's/inherited prototype)
All classes are functions in JS


Inside prototype is a constructor and any non-static methods belonging to that class (function)

Every Class/Function has at least prototype, name, and length as well as any other STATIC properties and methods
*/

//Object, Array, Function, String, Number are all functions that return their respective object.

const str = String("hello"); //returns a new string object with the value 'hello'
const obj = Object({ name: "Thang" }); //returns an Object object with the property 'name' and value 'Thang'
const fn = Function(
  ["name", "age"], //this is fn argument array
  "let string = `Hi I'm ${name}, I am ${age} years old`; console.log(string);" // this is fn body
); // returns a function that takes 'name' and 'age' variable and logs out the intro statement
const num = Number(10); //returns the Number object with the value 10
const ar = Array(10, 20, 30, 40); //returns new Array object [10,20,30,40]

//Object Prototype is a single global scope object. Every object inherits the same prototype and will be affected if the Object Prototype changes.
const array = [1, 2, 3];
//array has properties which are its indices (0,1,2)
// console.log(Object.getOwnPropertyNames(array.__proto__));

const store = {
  name: null,
  stock: [
    { name: "candy", quantity: 100 },
    { name: "fruit", quantity: 7 },
    { name: "toys", quantity: 23 },
  ],
};

const myStore = {};
myStore.name = "My Wonderful Store";
myStore.__proto__ = store;

const yourStore = {};
yourStore.name = "Not My Wonderful Store";
yourStore.__proto__ = store;

// console.log(Object.getOwnPropertyNames(yourStore.__proto__));
myStore.stock[1].quantity = 300;
// console.log(myStore);
// console.log(yourStore);

const monkey = {
  type: "monkey",
  name: "Mike",
  age: 10,
  speak: function () {
    console.log("Monkey speaks");
  },
  //monkey object now has access to all array properties and methods of Array object
  __proto__: Array.prototype,
  personality: ["playful", "friendly"],
};

//Prototype is an object that is a property of the Object object.
//Object object contains many built in properties and methods, of which Prototype is a part of.
Object.prototype.speak = function () {
  console.log("Object speaks");
};

//Property inherent (coded into this object) to monkey object
// monkey.speak();
//Property inherit from Object object to monkey object
// monkey.__proto__.speak();
//All inheritance properties and methods are through prototype object

//Protype of Array object contains many built in property and methods that arrays can access to.
// console.log(Object.getOwnPropertyNames(Array.__proto__));

// console.log(Object.prototype.__proto__);

// console.log(monkey);

const fakeArray = {
  0: "Zero",
  1: "One",
  2: "Two",
  length: 3,
  3: "Three",
};

//fakeArray now has all Array methods in its prototype (__proto__)
fakeArray.__proto__ = Array.prototype;
// console.log(Object.getOwnPropertyNames(fakeArray.__proto__));
//map method works because fakeArray's keys are essentially indices
// fakeArray.map((el) => console.log(el));

// function Person(name, age, favouriteFood) {
//   this.name = name;
//   this.age = age;
//   this.favouriteFood = favouriteFood;
// }

class Animal {
  constructor(type, gender, age) {
    this.type = type;
    this.gender = gender;
    this.age = age;
  }
  makeNoise() {
    console.log(`${this.type} is making noise.`);
  }
}

// const jackie = new Person("Jackie", 35, "Sourdough Bread");
//adding custom method to Person's prototype
Person.prototype.introduce = function () {
  console.log(
    `My name is ${this.name}. I am ${this.age} years of age. I like ${this.favouriteFood}`
  );
};
// console.log(jackie);
// jackie.introduce();

const cat = new Animal("cat", "female", 5);
// cat.makeNoise();
//adding custom method to Person's prototype
Animal.prototype.jump = function () {
  console.log(`${this.type} jumps`);
};

// cat.jump();

// console.log(Object.getOwnPropertyNames(jackie));
// console.log(Object.getOwnPropertyNames(jackie.__proto__));
// console.log(Object.getOwnPropertyNames(Object.prototype));
// Object.prototype.ship = "Titanic";

// console.log(Object.getOwnPropertyNames(Array.prototype.__proto__));

// console.log(jackie.__proto__.__proto__.__proto__);

//new keyword
function ThisPerson(name, age, favouriteFood) {
  this.name = name;
  this.age = age;
  this.favouriteFood = favouriteFood;
}

//The new keyword creates an empty object and hooking up its __proto__ to the parent's prototype behind the scene
function ProtoPerson(name, age, favouriteFood) {
  const instance = {
    name,
    age,
    favouriteFood,
  };

  instance.__proto__ = ProtoPerson.prototype;
  return instance;
}

const thisPerson = new ThisPerson("This", 1, "cookies");
const protoPerson = ProtoPerson("Proto", 2, "?");

// console.log(thisPerson.__proto__.constructor.name);
// console.log(protoPerson.__proto__.constructor.name);

console.log("----Object----");
console.log(Object.getOwnPropertyNames(Object.__proto__));
console.log(Object.getOwnPropertyNames(Object.prototype));
console.log("----Function----");
console.log(Object.getOwnPropertyNames(Function));
console.log(Object.getOwnPropertyNames(Function.__proto__)); //Function's __proto__ points to its own prototype
console.log(Object.getOwnPropertyNames(Function.prototype));
console.log("----Array----");
console.log(Object.getOwnPropertyNames(Array.__proto__));
console.log(Object.getOwnPropertyNames(Array.prototype));
console.log("----String----");
console.log(Object.getOwnPropertyNames(String.__proto__));
console.log(Object.getOwnPropertyNames(String.prototype));

function Person(name, age, favouriteFood) {
  this.name = name;
  this.age = age;
  this.favouriteFood = favouriteFood;
}

Person.prototype.greet = function () {
  console.log(`${this.name} says hello!`);
};

function SuperHero(name, age, favouriteFood, overPower) {
  this.name = name;
  this.age = age;
  this.favouriteFood = favouriteFood;
  this.overPower = overPower;
}
//SuperHero inheriting Person's prototype to get access to the methods within Person prototype object
//This inserts Person prototype between SuperHero prototype and Object prototype essential translate from:
//batman.prototype --> SuperHero.prototype --> Object.prototype
//to:
//batman.prototype --> SuperHero.prototype --> Person.prototype --> Object.prototype
SuperHero.prototype.__proto__ = Person.prototype;
const person = new Person("Anya", 40, "Sour Keys");
const batman = new SuperHero("Batman", 55, "Steak", false);
let proto = batman.__proto__;
while (proto) {
  console.log(proto.constructor.name);
  proto = proto.__proto__;
}
