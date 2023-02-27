//Map: DS that focuses on data storage and access. Can simplify and improve data access compared ot Obj. Also store data in key-value pairs, keys must be unique. Key can be any datatype.
const country = new Map();
country.set("population", 12000);
country.set("averageAge", 55);
country.set("name", "Kings Landing");
console.log(country);
//delete 'name' key from Map
country.delete("name");
console.log(country);

const myPet = new Map();
myPet.set("name", "Sudo");
myPet.set("type", "Dog");
myPet.set("breed", "Poodle");
myPet.set("age", 7);
myPet.set("friends", ["Bit", "Byte", "Data"]);
console.log(myPet);
//change the value of breed
myPet.set("breed", "Beagle");
console.log(myPet);
//remove 'Data' from list of friends
myPet.get("friends").pop();
console.log(myPet);
//add 'Chip' to friend list
myPet.get("friends").push("Chip");
console.log(myPet);
//clear all keys from myPet map
myPet.clear();
console.log(myPet); //empty map
