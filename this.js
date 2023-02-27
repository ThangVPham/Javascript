//The context for this is not yet determined. It is dynamically assign to the object calling this method. The context can be assigned using 'bind','call', and 'apply' method
//In ARROW function, the context of 'this' is INHERIT FROM THE PARENT of where the function is defined.
console.log(Object.getOwnPropertyNames(Object.prototype));
const alex = {
  name: "Alex",
  friend: {
    greet: function () {
      console.log(`${this.name} says hello!`);
    },
  },
  greet: function () {
    console.log(`${this.name} says hello!`);
  },

  arrowGreet: () => {
    console.log(`${this.name} says hello!`);
  },
};
//The Alex object calling greet method, passing its name property to the greet function.
alex.greet(); //'Alex says hello!'

//The 'friend' object inside of 'alex' calling greet method, passing its properties to the greet function. The friend object does not have any property called 'name'.
alex.friend.greet(); //'undefined says hello!'

//The method friend.greet binds to an object containing the property 'name' of value 'Lana'.
alex.friend.greet.bind({ name: "Lana" })(); //'Lana says hello!'

//The alex.greet method is called using an object with the 'name' property that has value of 'Aimi'
alex.greet.call({ name: "Aimi" });

//constructor function
function Hero(name) {
  (this.name = name),
    (this.greet = function () {
      console.log(this);
      console.log(`${this.name} says fantastic!`);
    });
}
const superman = {
  name: "superman",
  greet: function () {
    console.log(this);
    console.log(this.name, " says hello!");
  },
};
const batman = new Hero("batman");
console.log(Object.getOwnPropertyNames(batman.__proto__));

const book = {
  name: "Harry Potter",
  author: "J.K Rowling",
  characters: {
    mainChars: ["Harry", "Ron", "Hermione"],
    list: function () {
      for (let char of this.mainChars) {
        console.log(char);
      }
    },
  },
};

const book2 = {
  characters: {
    mainChars: ["Draco", "Severus", "Voldemort"],
  },
};

book.characters.list();
book.characters.list.call(book2.characters); // Temporarily binding book2 characters to list method

book.characters.list = book.characters.list.bind(book2.characters); //Permanently binding book2 characters to book character list method
book.characters.list();

const employee = {
  role: "Developer",
  baseSalary: 60000,
  getThis: function () {
    return (() => this)();
  },
};

console.log(employee.getThis());
