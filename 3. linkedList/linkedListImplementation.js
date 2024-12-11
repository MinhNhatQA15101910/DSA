class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
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
    const holdingPointer = leader.next;

    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;

    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
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

      currHead.next = null;
      currHead = null;
    } else if (index === this.length - 1) {
      const leader = this._traverseToIndex(index - 1);

      this.tail = leader;
      leader.next = null;
    } else {
      const leader = this._traverseToIndex(index - 1);
      let unwantedNode = leader.next;

      leader.next = unwantedNode.next;
      unwantedNode.next = null;
      unwantedNode = null;
    }

    this.length--;
    return this;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.printList();

myLinkedList.append(5);
myLinkedList.printList();

myLinkedList.append(16);
myLinkedList.printList();

myLinkedList.prepend(1);
myLinkedList.printList();

myLinkedList.insert(2, 99);
myLinkedList.printList();

myLinkedList.insert(20, 88);
myLinkedList.printList();

myLinkedList.remove(1);
myLinkedList.printList();

myLinkedList.remove(1);
myLinkedList.printList();
