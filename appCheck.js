const NumberAnalyzer = require("./JavaScriptSpecial/100-js/MissingAndReapting");

const arr = [4, 3, 6, 2, 1, 3, 5, 41];
const analyzer = new NumberAnalyzer(arr);
const result = analyzer.findMissingAndRepeating();
console.log(result);
