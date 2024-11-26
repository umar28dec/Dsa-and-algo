class ParenthesisGenerator {
  generateParenthesis(n) {
    const result = [];
    const backtrack = (currentString, openCount, closeCount) => {
      if (currentString.length === 2 * n) {
        result.push(currentString);
        return;
      }

      if (openCount < n) {
        backtrack(currentString + "(", openCount + 1, closeCount);
      }

      if (closeCount < openCount) {
        backtrack(currentString + ")", openCount, closeCount + 1);
      }
    };
    backtrack("", 0, 0);
    return result;
  }
}

module.exports = ParenthesisGenerator;
