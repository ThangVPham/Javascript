/*------ ObjectHierarchy ------*
            null
             |      
             ↓
          Object 
             |
  ___________|_____________
  |          |            |
  ↓          ↓            ↓
Array      String    Custom Object

(each has its own prototype along with inherited __proto__)
(each passes down its prototype to child's object)
(__proto__ keyword accesses the parent's prototype)
*/

//Object Prototype is a single global scope object. Every object inherits the same prototype and will be affected if the Object Prototype changes.
const array = [1, 2, 3];
console.log(Object.getOwnPropertyNames(array.__proto__));

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

console.log(Object.getOwnPropertyNames(yourStore.__proto__));
myStore.stock[1].quantity = 300;
console.log(myStore);
console.log(yourStore);

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
monkey.speak();
//Property inherit from Object object to monkey object
monkey.__proto__.speak();
//All inheritance properties and methods are through prototype object

//Protype of Array object contains many built in property and methods that arrays can access to.
console.log(Object.getOwnPropertyNames(Array.__proto__));

console.log(Object.prototype.__proto__);

console.log(monkey);

const fakeArray = {
  0: "Zero",
  1: "One",
  2: "Two",
  length: 3,
  3: "Three",
};

//fakeArray now has all Array methods in its prototype (__proto__)
fakeArray.__proto__ = Array.prototype;
console.log(Object.getOwnPropertyNames(fakeArray.__proto__));
//map method works because fakeArray's keys are essentially indices
fakeArray.map((el) => console.log(el));
