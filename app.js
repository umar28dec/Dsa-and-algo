// main.js or any other file

const MRUCache = require("./algo/mru");

let obj = new MRUCache(3);
obj.put(1, 1);
obj.put(2, 2);
obj.put(3, 3);
obj.put(4, 4);
console.log(obj.get(3));
console.log(obj.get(2));
obj.put(5, 5);
