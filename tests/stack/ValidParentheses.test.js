const ValidParentheses = require("../../algo/stack/valid-parenthese");

describe("ValidParentheses", () => {
  let validator;

  beforeEach(() => {
    validator = new ValidParentheses();
  });

  test("should return true for a single valid pair of parentheses", () => {
    expect(validator.isValid("()")).toBe(true);
  });

  test("should return true for a string with multiple valid pairs of parentheses", () => {
    expect(validator.isValid("()[]{}")).toBe(true);
  });

  test("should return false for mismatched parentheses", () => {
    expect(validator.isValid("(]")).toBe(false);
    expect(validator.isValid("([)]")).toBe(false);
    expect(validator.isValid("(((")).toBe(false);
  });

  test("should return true for nested valid parentheses", () => {
    expect(validator.isValid("{[()]}")).toBe(true);
    expect(validator.isValid("(({{[[]]}}))")).toBe(true);
  });

  test("should return false for cases with invalid closing brackets", () => {
    expect(validator.isValid("([}])")).toBe(false);
    expect(validator.isValid("({[})]")).toBe(false);
  });

  test("should return true for empty string", () => {
    expect(validator.isValid("")).toBe(true);
  });

  test("should return false for only opening parentheses without closing", () => {
    expect(validator.isValid("(")).toBe(false);
    expect(validator.isValid("[")).toBe(false);
    expect(validator.isValid("{")).toBe(false);
  });

  test("should return false for a closing parenthesis without an opening one", () => {
    expect(validator.isValid(")")).toBe(false);
    expect(validator.isValid("}")).toBe(false);
    expect(validator.isValid("]")).toBe(false);
  });

  test("should return true for valid parentheses with mixed types", () => {
    expect(validator.isValid("{[()]}")).toBe(true);
    expect(validator.isValid("({[]})")).toBe(true);
  });

  test("should return false for parentheses with extra closing ones", () => {
    expect(validator.isValid("{[()]]")).toBe(false);
    expect(validator.isValid("(([]))}")).toBe(false);
  });

  test("should handle long strings with valid parentheses", () => {
    const longValidString = "({[]})".repeat(1000);
    expect(validator.isValid(longValidString)).toBe(true);
  });

  test("should handle long strings with invalid parentheses", () => {
    const longInvalidString = "({[]})".repeat(999) + "(";
    expect(validator.isValid(longInvalidString)).toBe(false);
  });
});
