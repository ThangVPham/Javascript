/*4 main ideas of OOP:
    -Inheritance
    -Encapsulation
    -Abstraction
    -Polymorphism
JS is not a traditional OOP language. Classes are built on top of Prototypes.
Object is an actual type in JS.
JS can simulate most/all of the core OOP concepts.
*/
//Class syntax
class Player {
  constructor(name, hp, mp, items) {
    this.name = name;
    this.hp = hp;
    this.mp = mp;
    this.items = items;
  }
}

const hanSolo = new Player("Han Solo", 100, 100, ["Blaster"]);
console.log(hanSolo);
console.log(Object.getOwnPropertyNames(hanSolo));
console.log(Object.getOwnPropertyNames(hanSolo.__proto__));

class Student {
  constructor(name, major, grades) {
    this.name = name;
    this.major = major;
    this.grades = grades;
  }

  addGrade(grade) {
    this.grades.push(grade);
  }

  gpa() {
    return (
      this.grades.reduce((acc, curr) => {
        return (acc += curr);
      }, 0) / this.grades.length
    );
  }
}

const don = new Student("Don", "Chemistry", [95, 75, 83]);
console.log(don.gpa().toFixed(2));
console.log(don.addGrade(100));
console.log(don);
console.log(don.gpa().toFixed(2));

class Bookstore {
  constructor(books) {
    this.books = books;
  }
  listBooks() {
    for (let book of this.books) {
      book.displayBook();
    }
  }
}

class Book {
  constructor(name, author) {
    this.name = name;
    this.author = author;
  }
  displayBook() {
    console.log(`${this.name} by ${this.author}`);
  }
}

// const nineteen84 = new Book("1984", "George Orwell");
// const hp = new Book("Harry Potter", "J.K Rowling");
// const bookstore = new Bookstore([nineteen84, hp]);
// bookstore.listBooks();

//The EnemyFactory class contains a single method that returns an object of FlyingEnemy type. FlyingEnemy type is defined within the generateFlyingEnemy method.
class EnemyFactory {
  generateFlyingEmeny(name) {
    class FlyingEnemy {
      constructor(flyingName) {
        this.name = flyingName;
      }
      fly() {
        console.log(`${this.name} is flying`);
      }
    }
    return new FlyingEnemy(name);
  }
}

const factory = new EnemyFactory();
console.log(Object.getOwnPropertyNames(EnemyFactory.prototype));
const flying = factory.generateFlyingEmeny("F-35");
console.log(Object.getOwnPropertyNames(flying.__proto__));

flying.fly();

class Player2 {
  constructor(name, hp, mp, items) {
    this.name = name;
    this.hp = hp;
    this.mp = mp;
    this.items = items;
  }
  speak(phrase) {
    console.log(`${this.name} says: ${phrase}`);
  }
}

class Warrior extends Player2 {
  constructor(name, hp, mp, items, shield) {
    super(name, hp, mp, items);
    this.shield = shield;
  }
  speak(phrase) {
    console.log(`Warrior: ${phrase}!!!`);
  }
}

class Wizard extends Player2 {
  constructor(name, hp, mp, items, wand) {
    super(name, hp, mp, items);
    this.wand = wand;
  }
  speak(phrase) {
    console.log(`Wizard: ${phrase}!`);
  }
}

class Hobbit extends Player2 {
  constructor(name, hp, mp, items, knife) {
    super(name, hp, mp, items);
    this.knife = knife;
  }
}

const warrior = new Warrior(
  "Thang",
  100,
  100,
  ["potions", "gloves"],
  "Bronze Shield"
);

const wizard = new Wizard(
  "Valerey",
  50,
  200,
  ["potion", "cape"],
  "Frost Staff"
);

const hobbit = new Hobbit("Coco", 20, 50, ["pot", "garlic"], "Iron Knife");

warrior.speak("Forwarddd");
wizard.speak("Patience, my friend");
hobbit.speak("What about 2nd lunch?");

//-------------------------------------------------------------------------------
class Vehicle {
  constructor(name, maxSpeed) {
    this.name = name;
    this.maxSpeed = maxSpeed;
  }

  getMaxSpeed() {
    return this.maxSpeed;
  }
}

class Spaceship extends Vehicle {
  constructor(name, maxSpeed, numRocketEngines) {
    super(name, maxSpeed);
    this.numRocketEngines = numRocketEngines;
  }
}

const spaceship = new Spaceship("Enterprise", 1000, 2);
// console.log(spaceship.getMaxSpeed());
// console.log(spaceship.numRocketEngines);

class Shape {
  constructor(colour = "Transparent") {
    this.colour = colour;
    this.type = "Shape";
  }

  describe() {
    console.log(`A ${this.colour} ${this.type}`);
  }
}

class Square extends Shape {
  constructor(colour, sideLength) {
    super(colour);
    this.sideLength = sideLength;
    this.type = "Square";
  }

  area() {
    return Math.pow(this.sideLength, 2);
  }
}

class Rectangle extends Shape {
  constructor(colour, width, height) {
    super(colour);
    this.width = width;
    this.height = height;
    this.type = "Rectangle";
  }

  area() {
    return this.width * this.height;
  }
}

const square = new Square("blue", 5);
const rectangle = new Rectangle("red", 5, 6);

// console.log(square.area());
// console.log(rectangle.area());
// for (const shape of [square, rectangle]) {
//   shape.describe();
// }

// const shape = new Shape();
// shape.describe();

class Circle extends Shape {
  constructor(colour, radius) {
    super(colour);
    this.radius = radius;
    this.type = "Circle";
  }
  area() {
    return Math.PI * Math.pow(this.radius, 2);
  }
  describe() {
    console.log(`A round and awesome ${this.colour} ${this.type}`);
  }
}
const circle = new Circle("green", 3);

// console.log(circle.area()); // 28.27433
// for (const shape of [square, rectangle, circle]) {
//   shape.describe();
// }

//------------------------------------------------------------------------
//Implementing modified Array.prototype.map method
class FancyArray extends Array {
  mapWithLoggin(cb) {
    const result = new FancyArray();
    for (let i in this) {
      let after = cb(this[i], Number(i));
      result.push(after);
      console.log(`Current: ${this[i]}, After CB: ${after}`);
    }
    return result;
  }
}

const arr = new FancyArray(1, 2, 3, 4);
console.log(arr);
const mapped = arr.mapWithLoggin((item) => {
  return Math.pow(item, 2);
});
console.log(mapped);
