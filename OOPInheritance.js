/*
    Static methods and fields belong to the class and not accessible from class instance.
    Public fields are inherited by class instance and become instance's properties.
    Public methods can be accessed from class instance.

*/

class Animal {
  #type;
  constructor(type) {
    this.#type = type;
  }
  static knownMammals = [];
  mammal = true;
  eyes = 2;

  static isMammal(animal = {}) {
    if (animal.type === "mammal") {
      return true;
    }
    return false;
  }
  describe() {}
}

class Monkey extends Animal {
  static knownMonkeys = [];
  height;
  weight;
  static isCute() {}
  eatBanana() {}
  dance() {}
}

// 2. What will this code print out:
const animal = new Animal("mammal");
console.log("---new animal---");
console.log(Object.getOwnPropertyNames(animal)); //[mammal, eyes] public fields/properties (non-static) are inherited

console.log("---new animal proto---");
console.log(Object.getOwnPropertyNames(animal.__proto__)); //[constructor, describe]  *NOTE that only non-static methods get inherited
console.log("---ANIMAL---");
console.log(Object.getOwnPropertyNames(Animal)); //[knownMammals,isMammal, prototype, name, length]

console.log("---ANIMAL proto---");
console.log(Object.getOwnPropertyNames(Animal.__proto__)); //Function prototype -> [length,name,constructor, arguments, caller, apply, bind, toString, call]

const monkey = new Monkey();
console.log("---monkey---");
console.log(Object.getOwnPropertyNames(monkey)); //[height, weight, eyes, mammal] *Some fields like 'eyes' and 'mammal' are inherited from Animal class*
console.log("---monkey proto---");
console.log(Object.getOwnPropertyNames(monkey.__proto__)); //MONKEY PROTOTYPE -> [eatBanana, constructor]
console.log("---MONKEY---");
console.log(Object.getOwnPropertyNames(Monkey)); //[knownMonkeys, isCute, prototype, name, length]
console.log("---MONKEY proto---");
console.log(Object.getOwnPropertyNames(Monkey.__proto__)); // [length,name,prototype, knownMammals, isMammal]
