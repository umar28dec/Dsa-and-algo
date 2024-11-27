const DoublyList = require("../../algo/linked-list/DoublyList");

describe("DoublyList.insertAtStart", () => {
  // Test: Insert a node into an empty list (First node)
  test("should insert a single node and set it as head when the list is empty", () => {
    const list = new DoublyList();
    const node = list.insertAtStart(10);

    expect(list.head).toBe(node);
    expect(list.head.data).toBe(10);
    expect(list.head.next).toBeNull(); // No next node
    expect(list.head.prev).toBeNull(); // No previous node
    expect(list.size).toBe(1);
  });

  // Test: Insert a node into a list with one element (insert at the beginning)
  test("should insert a node at the start when the list has one node", () => {
    const list = new DoublyList();
    list.insertAtStart(10); // Insert first node
    const node = list.insertAtStart(20); // Insert at start again

    expect(list.head).toBe(node); // The new node should be the head
    expect(list.head.data).toBe(20);
    expect(list.head.next.data).toBe(10); // Next node should be the first one
    expect(list.head.prev).toBeNull(); // No previous node for the new head
    expect(list.size).toBe(2);

    // Check previous pointer of the second node
    expect(list.head.next.prev).toBe(node); // The previous of the first node should point to the new head
  });

  // Test: Insert multiple nodes and check the correct linking of `next` and `prev`
  test("should correctly link the next and prev pointers when inserting multiple nodes", () => {
    const list = new DoublyList();
    list.insertAtStart(10);
    list.insertAtStart(20);
    list.insertAtStart(30);

    // Now the head should be 30
    expect(list.head.data).toBe(30);
    expect(list.head.next.data).toBe(20);
    expect(list.head.next.next.data).toBe(10);
    expect(list.head.prev).toBeNull(); // The head has no previous node
    expect(list.head.next.prev.data).toBe(30); // The previous of the second node should be 30
    expect(list.size).toBe(3);
  });

  // Test: Inserting `null` value as data
  test("should insert null as a node when the data is null", () => {
    const list = new DoublyList();
    const node = list.insertAtStart(null);

    expect(list.head).toBe(node);
    expect(list.head.data).toBeNull(); // The node data should be null
    expect(list.head.next).toBeNull(); // No next node
    expect(list.head.prev).toBeNull(); // No previous node
    expect(list.size).toBe(1);
  });

  // Test: Inserting `undefined` value as data
  test("should insert undefined as a node when the data is undefined", () => {
    const list = new DoublyList();
    const node = list.insertAtStart(undefined);

    expect(list.head).toBe(node);
    expect(list.head.data).toBeUndefined(); // The node data should be undefined
    expect(list.head.next).toBeNull(); // No next node
    expect(list.head.prev).toBeNull(); // No previous node
    expect(list.size).toBe(1);
  });

  // Test: Insert into a list after inserting multiple elements
  test("should insert a node at the start and maintain correct links after multiple insertions", () => {
    const list = new DoublyList();
    list.insertAtStart(30); // Insert 30 at the start
    list.insertAtStart(40); // Insert 40 at the start
    list.insertAtStart(50); // Insert 50 at the start

    const node = list.insertAtStart(60); // Insert 60 at the start

    expect(list.head).toBe(node); // The new node (60) should be the head
    expect(list.head.data).toBe(60);
    expect(list.head.next.data).toBe(50); // Next should be 50
    expect(list.head.next.next.data).toBe(40); // Next of next should be 40
    expect(list.head.next.next.next.data).toBe(30); // Next of next of next should be 30
    expect(list.head.prev).toBeNull(); // The new head has no previous node
    expect(list.size).toBe(4);
  });

  // Test: Check that the size is correctly updated when inserting at start
  test("should increment size correctly when inserting at the start", () => {
    const list = new DoublyList();
    expect(list.size).toBe(0);
    list.insertAtStart(10);
    expect(list.size).toBe(1);
    list.insertAtStart(20);
    expect(list.size).toBe(2);
    list.insertAtStart(30);
    expect(list.size).toBe(3);
  });

  // Test: Insert an element in the list and check the linking of `prev` and `next`
  test("should correctly link previous and next pointers for multiple nodes", () => {
    const list = new DoublyList();
    list.insertAtStart(100); // Insert 100
    list.insertAtStart(200); // Insert 200
    list.insertAtStart(300); // Insert 300

    expect(list.head.data).toBe(300); // Head should be 300
    expect(list.head.next.data).toBe(200); // Next node should be 200
    expect(list.head.next.next.data).toBe(100); // Next of next should be 100
    expect(list.head.prev).toBeNull(); // Head has no previous node
    expect(list.head.next.prev.data).toBe(300); // The previous of 200 should be 300
    expect(list.head.next.next.prev.data).toBe(200); // The previous of 100 should be 200
    expect(list.size).toBe(3);
  });

  // Test: Insert when list is initially empty
  test("should insert correctly when the list is initially empty", () => {
    const list = new DoublyList();
    const node = list.insertAtStart(50);

    expect(list.head).toBe(node); // The inserted node should be the head
    expect(list.head.data).toBe(50);
    expect(list.head.next).toBeNull(); // No next node
    expect(list.head.prev).toBeNull(); // No previous node
    expect(list.size).toBe(1);
  });
});
