function Person(name, age, favouriteFood) {
  this.name = name;
  this.age = age;
  this.favouriteFood = favouriteFood;
}

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

const jackie = new Person("Jackie", 35, "Sourdough Bread");

// console.log(jackie);
// console.log(Object.getOwnPropertyNames(jackie));
// console.log(Object.getOwnPropertyNames(jackie.__proto__));
console.log(Object.getOwnPropertyNames(Object.prototype));
Object.prototype.ship = "Titanic";

console.log(Object.getOwnPropertyNames(Array.prototype.__proto__));

// console.log(jackie.__proto__.__proto__.__proto__);
