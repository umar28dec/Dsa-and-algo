// main.js or any other file

const Stack = require("./algo/stackWithCapacity");
// Example usage
const stack = new Stack(3);
console.log(stack.pop());
console.log(stack.push(10)); // [10]
console.log(stack.push(20)); // [10, 20]
console.log(stack.push(30)); // [10, 20, 30]
console.log(stack.push(40)); // "Stack is full. Cannot push element."

console.log(stack.print()); // [10, 20, 30]

console.log(stack.pop()); // 30
console.log(stack.print()); // [10, 20]

console.log(stack.peek()); // 20
console.log(stack.size()); // 2
