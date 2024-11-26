const ParenthesisGenerator = require("./algo/generateParentheses");
const generator = new ParenthesisGenerator();

console.log(generator.generateParenthesis(3)); // Output: ["((()))", "(()())", "(())()", "()(())", "()()()"]
