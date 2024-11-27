class Node {
  constructor(element) {
    this.data = element;
    this.next = null;
    this.prev = null;
  }
}

class DoublyList {
  constructor() {
    this.head = null;
    this.size = 0;
  } 

  insertAtStart(data) {
    const node = new Node(data);
    node.next = this.head;

    if (this.head !== null) {
      this.head.prev = node;
    }
    this.head = node;
    this.size++;
    return node;
  }
}

module.exports = DoublyList;
