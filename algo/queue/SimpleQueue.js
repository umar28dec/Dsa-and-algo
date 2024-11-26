class Queue {
  constructor() {
    this.items = [];
  }

  enQueue(item) {
    this.items.push(item);
  }
  deQueue() {
    if (!this.isEmpty()) {
      return this.items.shift();
    }
    return null;
  }

  size() {
    return this.items.length;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[0];
    }
    return null;
  }
}
module.exports = Queue;
