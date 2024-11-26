const Queue = require("../../algo/queue/SimpleQueue");

describe("Queue Class", () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  test("should create an empty queue", () => {
    expect(queue.isEmpty()).toBe(true);
    expect(queue.size()).toBe(0);
  });

  test("should enqueue elements correctly", () => {
    queue.enQueue(10);
    queue.enQueue(20);
    expect(queue.size()).toBe(2);
    expect(queue.peek()).toBe(10);
  });

  test("should dequeue elements correctly", () => {
    queue.enQueue(10);
    queue.enQueue(20);
    queue.enQueue(30);

    expect(queue.deQueue()).toBe(10);
    expect(queue.size()).toBe(2);
    expect(queue.peek()).toBe(20);
  });

  test("should return null when dequeuing from an empty queue", () => {
    expect(queue.deQueue()).toBeNull();
  });

  test("should return null when peeking an empty queue", () => {
    expect(queue.peek()).toBeNull();
  });

  test("should handle sequential enqueue and dequeue operations correctly", () => {
    queue.enQueue(1);
    queue.enQueue(2);
    queue.enQueue(3);

    expect(queue.deQueue()).toBe(1);
    expect(queue.deQueue()).toBe(2);
    expect(queue.size()).toBe(1);
    expect(queue.peek()).toBe(3);

    queue.deQueue();
    expect(queue.isEmpty()).toBe(true);
  });

  test("should maintain correct size after enqueue and dequeue operations", () => {
    queue.enQueue("a");
    queue.enQueue("b");
    queue.enQueue("c");

    expect(queue.size()).toBe(3);

    queue.deQueue();
    expect(queue.size()).toBe(2);

    queue.deQueue();
    expect(queue.size()).toBe(1);

    queue.deQueue();
    expect(queue.size()).toBe(0);
    expect(queue.isEmpty()).toBe(true);
  });

  test("should handle multiple peek operations without affecting the queue", () => {
    queue.enQueue("x");
    queue.enQueue("y");

    expect(queue.peek()).toBe("x");
    expect(queue.peek()).toBe("x");
    expect(queue.size()).toBe(2);
  });

  test("should return null for deQueue and peek when the queue is empty after some operations", () => {
    queue.enQueue(100);
    queue.enQueue(200);
    queue.deQueue();
    queue.deQueue();

    expect(queue.deQueue()).toBeNull();
    expect(queue.peek()).toBeNull();
  });
});
