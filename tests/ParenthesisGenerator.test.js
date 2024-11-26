const ParenthesisGenerator = require("../algo/generateParentheses");

describe("ParenthesisGenerator", () => {
  let generator;

  // Initialize the class before each test
  beforeEach(() => {
    generator = new ParenthesisGenerator();
  });

  test("should generate all combinations for n = 1", () => {
    const result = generator.generateParenthesis(1);
    expect(result).toEqual(["()"]);
  });

  test("should generate all combinations for n = 2", () => {
    const result = generator.generateParenthesis(2);
    expect(result).toEqual(["(())", "()()"]);
  });

  test("should generate all combinations for n = 3", () => {
    const result = generator.generateParenthesis(3);
    expect(result).toEqual(["((()))", "(()())", "(())()", "()(())", "()()()"]);
  });

  test("should generate all combinations for n = 0 (edge case)", () => {
    const result = generator.generateParenthesis(0);
    expect(result).toEqual([""]); // An empty string is a valid combination when n = 0
  });

  test("should generate all combinations for n = 4", () => {
    const result = generator.generateParenthesis(4);
    expect(result).toEqual([
      "(((())))",
      "((()()))",
      "((())())",
      "((()))()",
      "(()(()))",
      "(()()())",
      "(()())()",
      "(())(())",
      "(())()()",
      "()((()))",
      "()(()())",
      "()(())()",
      "()()(())",
      "()()()()",
    ]);
  });
});
