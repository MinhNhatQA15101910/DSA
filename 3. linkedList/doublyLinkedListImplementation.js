class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  _traverseToIndex(index) {
    if (index < 0 || index >= this.length) return null;

    let counter = 0;
    let currNode = this.head;
    while (counter < index) {
      currNode = currNode.next;
      counter++;
    }

    return currNode;
  }

  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  insert(index, value) {
    if (index <= 0) {
      return this.prepend(value);
    }

    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = new Node(value);
    const leader = this._traverseToIndex(index - 1);
    const follower = leader.next;

    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;

    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currNode = this.head;
    while (currNode !== null) {
      array.push(currNode.value);
      currNode = currNode.next;
    }
    console.log(array);
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;

    if (index === 0) {
      let currHead = this.head;
      this.head = currHead.next;

      this.head.prev = null;
      currHead.next = null;
      currHead = null;
    } else if (index === this.length - 1) {
      const leader = this._traverseToIndex(index - 1);

      this.tail = leader;
      leader.next = null;
    } else {
      const leader = this._traverseToIndex(index - 1);
      let unwantedNode = leader.next;
      const holdingPointer = unwantedNode.next;

      leader.next = holdingPointer;
      holdingPointer.prev = leader;
      unwantedNode.prev = null;
      unwantedNode.next = null;
      unwantedNode = null;
    }

    this.length--;
    return this;
  }
}

const myDoublyLinkedList = new DoublyLinkedList(10);
console.log(myDoublyLinkedList);

myDoublyLinkedList.append(5);
console.log(myDoublyLinkedList);

myDoublyLinkedList.append(16);
console.log(myDoublyLinkedList);

myDoublyLinkedList.prepend(1);
myDoublyLinkedList.printList();

myDoublyLinkedList.insert(2, 99);
myDoublyLinkedList.printList();

myDoublyLinkedList.insert(20, 88);
myDoublyLinkedList.printList();

myDoublyLinkedList.remove(1);
myDoublyLinkedList.printList();

myDoublyLinkedList.remove(1);
myDoublyLinkedList.printList();
