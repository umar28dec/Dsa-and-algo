const SimpleList = require("./algo/linked-list/Singly-Linked-List");
const list = new SimpleList();
// list.insertAtFirst(100);
// list.insertAtFirst(200);
// list.insertAtFirst(300);
// list.insertAtLast(400);
// list.insertAtLast(500);
// console.log(list.length());

list.insertAt(500, -1);
// list.deleteAtFirst();
// list.deleteAtFirst();
// list.deleteAtLast();
// list.deleteAtLast();
console.log(list);
list.printList();
