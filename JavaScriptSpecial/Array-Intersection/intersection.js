class ArrayUtils {
  constructor(arrays = []) {
    this.arrays = arrays;
  }
  intersection() {
    if (this.arrays.length === 0) {
      return [];
    }
    let result = this.arrays.reduce((acc, currentArray) => {
      return acc.filter((element) => currentArray.includes(element));
    });
    return [...new Set(result)];
  }

  intersectionOptimized() {
    const elementCount = new Map();
    const totalArrays = this.arrays.length;
    for (const array of this.arrays) {
      let uniqueElement = new Set(array);
      for (const element of uniqueElement) {
        let x = elementCount.get(element) + 1 || 0;
        elementCount.set(element, x);
      }
    }
    let intersect = [];
    for (const [element, count] of elementCount.entries()) {
      if (count === totalArrays - 1) {
        intersect.push(element);
      }
    }
    return intersect;
  }
}
module.exports = ArrayUtils;
