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

  prepend(value) {
    const newNode = { value: value, nextNode: this.head };
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
  }

  insertAfter(value, afterValue) {
    const existingNode = this.find(afterValue);
    if (existingNode) {
      const newNode = { value: value, nextNode: existingNode.nextNode };
      existingNode.nextNode = newNode;
    }
  }

  find(value) {
    if (!this.head) {
      return;
    }
    let currNode = this.head;
    while (currNode) {
      if (currNode.value === value) {
        return currNode;
      }
      currNode = currNode.nextNode;
    }
    return "Not Found";
  }

  delete(value) {
    if (!this.head) {
      return;
    }
    while (this.head && this.head.value === value) {
      this.head = this.head.nextNode;
    }
    let currNode = this.head;
    console.log(currNode.nextNode);
    while (currNode.nextNode) {
      if (currNode.nextNode.value === value) {
        currNode.nextNode = currNode.nextNode.nextNode;
      } else {
        currNode = currNode.nextNode;
      }
    }
    if (this.tail.value === value) {
      this.tail = currNode;
    }
  }
}

// const linkedList1 = new LinkedList();

// linkedList1.append(1);
// linkedList1.append("Thang");
// linkedList1.append(false);
// linkedList1.prepend("First");
// linkedList1.insertAfter(2, 1);

// console.log(linkedList1.toArray());
