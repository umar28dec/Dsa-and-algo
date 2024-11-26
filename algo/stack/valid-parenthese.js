class ValidParentheses {
  isValid(s) {
    this.stack = [];
    this.matchingParenthese = {
      ")": "(",
      "}": "{",
      "]": "[",
    };
    for (const element of s) {
      if (element === "(" || element === "{" || element === "[") {
        this.stack.push(element);
      } else {
        if (this.matchingParenthese[element] !== this.stack.pop()) {
          return false;
        }
      }
    }
    return this.stack.length === 0;
  }
}

module.exports = ValidParentheses;
