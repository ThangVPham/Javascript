//Data Structures

//Array: Can store any length of any type of values. Value positions are indexed. Not as performant as Set when carrying out operations
let numbers = [1, 2, 3, 4, 5];

//Object: DS to group related data and functions together into key-value pairs. Keys must be unique.
const person = {
  firstName: "Max",
  age: 31,
  greet(text) {
    console.log(text);
  },
};

//Linked List: Custom DS
class LinkedList {
  constructor() {
    this.head = null; //First element of the list that points to the first node
    this.tail = null; //Last element of the list that points to the last node
  }

  append(value) {
    const newNode = {
      value: value,
      nextNode: null,
    };

    if (this.tail) {
      //if tail is null, update last tail.next and new tail to newNode
      this.tail.nextNode = newNode;
    }
    this.tail = newNode;
    if (!this.head) {
      // if head is null, update last head to new Node
      this.head = newNode;
    }
  }

  toArray() {
    const elements = [];

    let currNode = this.head;
    while (currNode) {
      elements.push(currNode);
      currNode = currNode.nextNode;
    }

    return elements;
  }
}

// const linkedList1 = new LinkedList();

// linkedList1.append(1);
// linkedList1.append('Hello There');
// linkedList1.append('Thang');
// linkedList1.append(true);
// // linkedList1.append(18.51);
// console.log(linkedList1);
