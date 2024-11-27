const ArrayUtils = require("../../JavaScriptSpecial/Array-Intersection/intersection");

describe("ArrayUtils", () => {
  test("returns the intersection of arrays with common elements", () => {
    const utils = new ArrayUtils([
      [1, 2, 3],
      [2, 3, 4],
      [2, 3],
    ]);
    expect(utils.intersection()).toEqual([2, 3]);
  });

  test("returns an empty array when no common elements exist", () => {
    const utils = new ArrayUtils([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]);
    expect(utils.intersection()).toEqual([]);
  });

  test("returns an empty array when one of the arrays is empty", () => {
    const utils = new ArrayUtils([[1, 2, 3], [], [2, 3]]);
    expect(utils.intersection()).toEqual([]);
  });

  test("returns the same array when only one array is provided", () => {
    const utils = new ArrayUtils([[1, 2, 3]]);
    expect(utils.intersection()).toEqual([1, 2, 3]);
  });

  test("returns an empty array when no arrays are provided", () => {
    const utils = new ArrayUtils([]);
    expect(utils.intersection()).toEqual([]);
  });

  test("handles arrays with duplicate elements correctly", () => {
    const utils = new ArrayUtils([
      [1, 2, 2, 3],
      [2, 2, 3],
      [2, 3],
    ]);
    expect(utils.intersection()).toEqual([2, 3]);
  });

  test("handles arrays with only one element that is common", () => {
    const utils = new ArrayUtils([
      [1, 2, 3],
      [2, 4, 6],
      [2, 5, 7],
    ]);
    expect(utils.intersection()).toEqual([2]);
  });

  test("returns an empty array for arrays with completely disjoint sets", () => {
    const utils = new ArrayUtils([
      [1, 2],
      [3, 4],
      [5, 6],
    ]);
    expect(utils.intersection()).toEqual([]);
  });

  test("handles arrays containing different data types", () => {
    const utils = new ArrayUtils([
      [1, "a", true],
      ["a", 2, false],
      ["a", 3, true],
    ]);
    expect(utils.intersection()).toEqual(["a"]);
  });

  test("handles arrays containing only one array with empty values", () => {
    const utils = new ArrayUtils([[]]);
    expect(utils.intersection()).toEqual([]);
  });

  test("handles arrays where the common elements appear in different orders", () => {
    const utils = new ArrayUtils([
      [3, 2, 1],
      [2, 1, 3],
      [1, 2, 3],
    ]);
    expect(utils.intersection()).toEqual([3, 2, 1]);
  });

  test("handles null or undefined values in arrays", () => {
    const utils = new ArrayUtils([
      [null, 1, 2],
      [1, null, 3],
      [null, 1],
    ]);
    expect(utils.intersection()).toEqual([null, 1]);
  });

  test("handles arrays with complex elements", () => {
    const arr = [
      ["1", "A", "@#", "3", "Q", "B", "17"],
      ["Z", "1", "GO", "3", "A", "@#"],
      ["T", "@#", "1", "A", "8"],
      ["100", "150", "@#", "300", "500", "1", "A", "SO"],
    ];
    const utils = new ArrayUtils(arr);
    expect(utils.intersection()).toEqual(["1", "A", "@#"]);
  });
});
