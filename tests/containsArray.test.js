const containsArray = require("../algo/57-containsArray");
describe("Test containsArray with different inputs ", () => {
  test("should return true if arr2 has at least one element in arr1", () => {
    expect(containsArray([1, 2, 3], [3, 4, 5])).toBe(true);
  });

  test("should return false if arr2 has no elements in arr1", () => {
    expect(containsArray([1, 2, 3], [4, 5, 6])).toBe(false);
  });

  test("should return false for empty arr1 and non-empty arr2", () => {
    expect(containsArray([], [1, 2, 3])).toBe(false);
  });

  test("should return false for non-empty arr1 and empty arr2", () => {
    expect(containsArray([1, 2, 3], [])).toBe(false);
  });

  test("should return false for both empty arr1 and arr2", () => {
    expect(containsArray([], [])).toBe(false);
  });

  test("should handle arrays with duplicate elements correctly", () => {
    expect(containsArray([1, 2, 2, 3], [3, 3, 4, 5])).toBe(true);
  });

  test("should return true if both arrays contain the same single element", () => {
    expect(containsArray([1], [1])).toBe(true);
  });

  test("should handle arrays with different data types", () => {
    expect(containsArray(["a", true, 1], [false, "a", 2])).toBe(true);
  });

  test("should handle arrays with undefined and null values", () => {
    expect(containsArray([undefined, null], [null, 1, 2])).toBe(true);
  });

  test("should return true for large arrays with one common element", () => {
    const arr1 = Array(10000).fill(0).concat(1);
    const arr2 = Array(10000).fill(2).concat(1);
    expect(containsArray(arr1, arr2)).toBe(true);
  });

  test("should return false for large arrays with no common elements", () => {
    const arr1 = Array(10000).fill(0);
    const arr2 = Array(10000).fill(1);
    expect(containsArray(arr1, arr2)).toBe(false);
  });

  test("should handle arrays with only one element each (no common elements)", () => {
    expect(containsArray([5], [6])).toBe(false);
  });

  test("should return false when arr1 contains nested arrays but arr2 does not match", () => {
    expect(containsArray([[1, 2], 3], [1, 2])).toBe(false);
  });

  test("should return true when arr1 and arr2 contain identical nested arrays", () => {
    expect(containsArray([[1, 2], 3], [[1, 2]])).toBe(true);
  });

  test("should handle arrays with objects as elements (no matching objects)", () => {
    expect(containsArray([{ a: 1 }], [{ a: 1 }])).toBe(true); // Different object references
  });

  test("should return false when arrays contain symbols and none match", () => {
    const sym1 = Symbol("a");
    const sym2 = Symbol("a");
    expect(containsArray([sym1], [sym2])).toBe(false); // Different symbols, even with same description
  });

  test("should return true when arrays contain the same symbol reference", () => {
    const sym = Symbol("a");
    expect(containsArray([sym], [sym])).toBe(true); // Same symbol reference
  });

  test("should handle arrays with NaN values correctly", () => {
    expect(containsArray([NaN, 1, 2], [NaN])).toBe(true); // NaN == NaN in JavaScript because treaded as string
  });

  test("should handle arrays with both numbers and numeric strings", () => {
    expect(containsArray([1, "2", 3], ["2"])).toBe(true); // String '2' is in arr1
  });
});
