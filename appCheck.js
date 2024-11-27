const ArrayUtils = require("./JavaScriptSpecial/Array-Intersection/intersection");
// Usage
const arrays = [
  [1, 2, 2, 3],
  [2, 2, 3],
  [2, 3],
];

const arrayUtilsObj = new ArrayUtils(arrays);
const result = arrayUtilsObj.intersection();
console.log(result);
