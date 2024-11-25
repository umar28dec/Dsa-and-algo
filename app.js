// main.js or any other file

const LRUCache = require("./algo/lru");

// Example usage
const obj = new LRUCache(2);
obj.put(1, 1);
obj.put(2, 2);
console.log(obj.get(1)); // Output: 1

obj.put(3, 3); // Removes key 2
console.log(obj.get(2)); // Output: -1 (not found)
