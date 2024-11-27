const SimpleList = require("../../algo/linked-list/Singly-Linked-List");

describe("SimpleList.insertAtFirst", () => {
  test("should insert an element into an empty list", () => {
    const list = new SimpleList();
    list.insertAtFirst(10);

    expect(list.size).toBe(1);
    expect(list.head).not.toBeNull();
    expect(list.head.data).toBe(10);
    expect(list.head.next).toBeNull();
  });

  test("should insert an element at the beginning of a non-empty list", () => {
    const list = new SimpleList();
    list.insertAtFirst(20);
    list.insertAtFirst(30);

    expect(list.size).toBe(2);
    expect(list.head).not.toBeNull();
    expect(list.head.data).toBe(30);
    expect(list.head.next.data).toBe(20);
    expect(list.head.next.next).toBeNull();
  });

  test("should handle inserting `null` as a valid data element", () => {
    const list = new SimpleList();
    list.insertAtFirst(null);

    expect(list.size).toBe(1);
    expect(list.head).not.toBeNull();
    expect(list.head.data).toBeNull();
    expect(list.head.next).toBeNull();
  });

  test("should handle inserting `undefined` as a valid data element", () => {
    const list = new SimpleList();
    list.insertAtFirst(undefined);

    expect(list.size).toBe(1);
    expect(list.head).not.toBeNull();
    expect(list.head.data).toBeUndefined();
    expect(list.head.next).toBeNull();
  });

  test("should handle inserting multiple elements consecutively", () => {
    const list = new SimpleList();
    list.insertAtFirst(50);
    list.insertAtFirst(40);
    list.insertAtFirst(30);

    expect(list.size).toBe(3);
    expect(list.head).not.toBeNull();
    expect(list.head.data).toBe(30);
    expect(list.head.next.data).toBe(40);
    expect(list.head.next.next.data).toBe(50);
    expect(list.head.next.next.next).toBeNull();
  });

  test("should handle inserting non-numeric values", () => {
    const list = new SimpleList();
    list.insertAtFirst("Test");
    list.insertAtFirst({ key: "value" });

    expect(list.size).toBe(2);
    expect(list.head.data).toEqual({ key: "value" });
    expect(list.head.next.data).toBe("Test");
    expect(list.head.next.next).toBeNull();
  });
});

describe("SimpleList.insertAtLast", () => {
  test("should insert an element into an empty list", () => {
    const list = new SimpleList();
    list.insertAtLast(10);
    console.log(list);

    expect(list.size).toBe(1);
    expect(list.head).not.toBeNull();
    expect(list.head.data).toBe(10);
    expect(list.head.next).toBeNull();
  });

  test("should insert an element at the end of a non-empty list", () => {
    const list = new SimpleList();
    list.insertAtFirst(20);
    list.insertAtLast(30);

    expect(list.size).toBe(2);
    expect(list.head).not.toBeNull();
    expect(list.head.data).toBe(20);
    expect(list.head.next.data).toBe(30);
    expect(list.head.next.next).toBeNull();
  });

  test("should handle inserting `null` as a valid data element", () => {
    const list = new SimpleList();
    list.insertAtLast(null);

    expect(list.size).toBe(1);
    expect(list.head).not.toBeNull();
    expect(list.head.data).toBeNull();
    expect(list.head.next).toBeNull();
  });

  test("should handle inserting `undefined` as a valid data element", () => {
    const list = new SimpleList();
    list.insertAtLast(undefined);

    expect(list.size).toBe(1);
    expect(list.head).not.toBeNull();
    expect(list.head.data).toBeUndefined();
    expect(list.head.next).toBeNull();
  });

  test("should handle inserting multiple elements consecutively", () => {
    const list = new SimpleList();
    list.insertAtLast(10);
    list.insertAtLast(20);
    list.insertAtLast(30);

    expect(list.size).toBe(3);
    expect(list.head.data).toBe(10);
    expect(list.head.next.data).toBe(20);
    expect(list.head.next.next.data).toBe(30);
    expect(list.head.next.next.next).toBeNull();
  });

  test("should handle inserting non-numeric values", () => {
    const list = new SimpleList();
    list.insertAtLast("Test");
    list.insertAtLast({ key: "value" });

    expect(list.size).toBe(2);
    expect(list.head.data).toBe("Test");
    expect(list.head.next.data).toEqual({ key: "value" });
    expect(list.head.next.next).toBeNull();
  });
});

describe("SimpleList.length", () => {
  test("should return 0 for an empty list", () => {
    const list = new SimpleList();
    expect(list.length()).toBe(0);
  });

  test("should return the correct size after inserting elements at the beginning", () => {
    const list = new SimpleList();
    list.insertAtFirst(10);
    list.insertAtFirst(20);
    expect(list.length()).toBe(2);
  });

  test("should return the correct size after inserting elements at the end", () => {
    const list = new SimpleList();
    list.insertAtLast(30);
    list.insertAtLast(40);
    expect(list.length()).toBe(2);
  });

  test("should return the correct size after mixed insertions", () => {
    const list = new SimpleList();
    list.insertAtFirst(50);
    list.insertAtLast(60);
    list.insertAtFirst(70);
    expect(list.length()).toBe(3);
  });

  test("should handle edge case of inserting and then removing all elements", () => {
    const list = new SimpleList();
    list.insertAtFirst(10);
    list.insertAtLast(20);
    list.head = null;
    list.size = 0;
    expect(list.length()).toBe(0);
  });
});

describe("SimpleList.printList", () => {
  test("should print nothing for an empty list", () => {
    const list = new SimpleList();
    const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    list.printList();
    expect(consoleSpy).not.toHaveBeenCalled();
    consoleSpy.mockRestore();
  });

  test("should print all elements for a list with one element", () => {
    const list = new SimpleList();
    list.insertAtFirst(10);

    const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    list.printList();
    expect(consoleSpy).toHaveBeenCalledTimes(1);
    expect(consoleSpy).toHaveBeenCalledWith(10);
    consoleSpy.mockRestore();
  });

  test("should print all elements for a list with multiple elements", () => {
    const list = new SimpleList();
    list.insertAtFirst(20);
    list.insertAtLast(30);
    list.insertAtFirst(10);

    const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    list.printList();
    expect(consoleSpy).toHaveBeenCalledTimes(3);
    expect(consoleSpy).toHaveBeenNthCalledWith(1, 10);
    expect(consoleSpy).toHaveBeenNthCalledWith(2, 20);
    expect(consoleSpy).toHaveBeenNthCalledWith(3, 30);
    consoleSpy.mockRestore();
  });
});

describe("SimpleList.search", () => {
  test("should return false for an empty list", () => {
    const list = new SimpleList();
    expect(list.search(10)).toBe(false);
  });

  test("should return true if the target is in a single-element list", () => {
    const list = new SimpleList();
    list.insertAtFirst(10);
    expect(list.search(10)).toBe(true);
  });

  test("should return false if the target is not in a single-element list", () => {
    const list = new SimpleList();
    list.insertAtFirst(20);
    expect(list.search(10)).toBe(false);
  });

  test("should return true if the target is in a multi-element list", () => {
    const list = new SimpleList();
    list.insertAtFirst(20);
    list.insertAtLast(30);
    list.insertAtFirst(10);
    expect(list.search(30)).toBe(true);
  });

  test("should return false if the target is not in a multi-element list", () => {
    const list = new SimpleList();
    list.insertAtFirst(20);
    list.insertAtLast(30);
    list.insertAtFirst(10);
    expect(list.search(40)).toBe(false);
  });

  test("should handle searching for `null` when it is in the list", () => {
    const list = new SimpleList();
    list.insertAtFirst(null);
    expect(list.search(null)).toBe(true);
  });

  test("should handle searching for `null` when it is not in the list", () => {
    const list = new SimpleList();
    list.insertAtFirst(10);
    expect(list.search(null)).toBe(false);
  });

  test("should handle searching for `undefined` when it is in the list", () => {
    const list = new SimpleList();
    list.insertAtFirst(undefined);
    expect(list.search(undefined)).toBe(true);
  });

  test("should handle searching for `undefined` when it is not in the list", () => {
    const list = new SimpleList();
    list.insertAtFirst(10);
    expect(list.search(undefined)).toBe(false);
  });
});

describe("SimpleList.insertAt", () => {
  test("should insert at the beginning when index is 0", () => {
    const list = new SimpleList();
    list.insertAt(10, 0);
    expect(list.head.data).toBe(10);
    expect(list.size).toBe(1);
  });

  test("should insert at the end when index equals the size of the list", () => {
    const list = new SimpleList();
    list.insertAtFirst(10);
    list.insertAt(20, 1);
    expect(list.head.next.data).toBe(20);
    expect(list.size).toBe(2);
  });

  test("should insert in the middle at the correct index", () => {
    const list = new SimpleList();
    list.insertAtFirst(10);
    list.insertAtLast(30);
    list.insertAt(20, 1); // Insert at index 1
    expect(list.head.data).toBe(10);
    expect(list.head.next.data).toBe(20);
    expect(list.head.next.next.data).toBe(30);
    expect(list.size).toBe(3);
  });

  test("should do nothing if index is out of bounds (too high)", () => {
    const list = new SimpleList();
    list.insertAtFirst(10);
    list.insertAt(20, 5); // Out of bounds
    expect(list.size).toBe(1);
    expect(list.head.data).toBe(10);
  });

  test("should do nothing if index is negative", () => {
    const list = new SimpleList();
    list.insertAtFirst(10);
    list.insertAt(20, -1); // Negative index
    expect(list.size).toBe(1);
    expect(list.head.data).toBe(10);
  });

  test("should work correctly for a single-element list", () => {
    const list = new SimpleList();
    list.insertAtFirst(10);
    list.insertAt(15, 1); // Insert at index 1
    expect(list.head.data).toBe(10);
    expect(list.head.next.data).toBe(15);
    expect(list.size).toBe(2);
  });
});
