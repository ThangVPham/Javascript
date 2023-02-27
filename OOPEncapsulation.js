/*
    Fields and methods can be made private using # infront of variable names.
    Privates properties and methods can only accessed within the class. 
*/

class Database {
  #token = "";
  cosntructor() {
    this.#token = "04A1tf4jDk";
  }

  saveData(data) {
    this.initDBConnection();
    this.#authorize();
    this.#updateQuery();
  }
  initDBConnection() {}
  #authorize() {}
  #updateQuery() {}
}
const db = new Database();
console.log(db.token); //token=undefined and not acccessible because its now private. So are the #methods
console.log(Object.getOwnPropertyNames(db.__proto__));

//Static methods can be access directly from the class itself instead of class's instance

class Utils {
  static capitalize(str) {
    return str.toUpperCase();
  }
}

// console.log(Utils.capitalize("this is not cool"));
