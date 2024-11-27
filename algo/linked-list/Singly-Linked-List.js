class Node {
  constructor(element, next = null) {
    this.data = element;
    this.next = next;
  }
}
class SimpleList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  insertAtFirst(data) {
    this.size++;
    return (this.head = new Node(data, this.head));
  }

  deleteAtFirst() {
    if (this.head === null) {
      return null;
    }
    const tempHead = this.head;
    this.head = tempHead.next;
    return this.head;
  }

  deleteAtLast() {
    if (this.head === null) {
      return null;
    }
    if (this.head.next === null) {
      this.head = null;
      return null;
    }
    let second = this.head;
    while (second.next.next !== null) {
      second = second.next;
    }
    second.next = null;
    return this.head;
  }

  insertAtLast(data) {
    let node = new Node(data);
    if (this.head === null) {
      this.head = node;
      this.size++;
      return node;
    }
    let currentHead = this.head;
    while (currentHead.next !== null) {
      currentHead = currentHead.next;
    }
    currentHead.next = node;
    this.size++;
    return this.head;
  }

  insertAt(data, index = 0) {
    if (index < 0) {
      return;
    }
    if (index > 0 && index > this.size) {
      return;
    }
    if (index === 0) {
      this.insertAtFirst(data);
      return;
    }
    const node = new Node(data);
    let current, previous;
    let count = 0;
    current = this.head;

    while (count < index) {
      previous = current;
      count++;
      current = current.next;
    }
    node.next = current;
    previous.next = node;
    this.size++;
  }

  printList() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
  length() {
    return this.size;
  }

  search(target) {
    let current = this.head;

    while (current !== null) {
      if (current.data === target) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
}
module.exports = SimpleList;
