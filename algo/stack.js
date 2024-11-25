class Stack {
  constructor() {
    this.stack = [];
  }

  push(element) {
    this.stack.push(element);
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  pop() {
    if (!this.isEmpty()) {
      return this.stack.pop();
    }
  }
  top() {
    if (!this.isEmpty()) {
      return this.stack[this.stack.length - 1];
    }
  }

  size() {
    return this.stack.length;
  }
  clear() {
    return (this.stack = []);
  }
}

module.exports = Stack;

// const stack = new Stack();

// stack.push(1);
// stack.push(2);
// stack.push(3);
// console.log(stack);
// console.log(stack.top());
// console.log(stack.pop());
// console.log(stack.top());
// console.log(stack.size());
// console.log(stack.isEmpty());
// console.log(stack.clear());
// console.log(stack);
// stack.push(3);
// console.log(stack);
