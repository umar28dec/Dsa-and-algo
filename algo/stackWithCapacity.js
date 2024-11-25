class Stack {
  constructor(capacity) {
    this.capacity = capacity;
    this.stack = [];
  }

  isFull() {
    return this.stack.length === this.capacity;
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  push(element) {
    if (this.isFull()) {
      return "Stack is full. Cannot push element.";
    }
    this.stack.push(element);
    return this.stack;
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack is empty. Cannot pop element.";
    }
    return this.stack.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return "Stack is empty.";
    }
    return this.stack[this.stack.length - 1];
  }

  size() {
    return this.stack.length;
  }

  print() {
    return this.stack;
  }
}
module.exports = Stack;

// // Example usage
// const stack = new Stack(3);

// console.log(stack.push(10)); // [10]
// console.log(stack.push(20)); // [10, 20]
// console.log(stack.push(30)); // [10, 20, 30]
// console.log(stack.push(40)); // "Stack is full. Cannot push element."

// console.log(stack.print()); // [10, 20, 30]

// console.log(stack.pop()); // 30
// console.log(stack.print()); // [10, 20]

// console.log(stack.peek()); // 20
// console.log(stack.size()); // 2
