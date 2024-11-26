const ValidParentheses = require("./algo/stack/valid-parenthese");
const validator = new ValidParentheses();
console.log(validator.isValid("({}})"));
console.log(validator.isValid("()")); // true
console.log(validator.isValid("()[]{}")); // true
console.log(validator.isValid("(]")); // false
console.log(validator.isValid("([)]")); // false
console.log(validator.isValid("{[]}")); // true
console.log(validator.isValid("")); // true (empty string is valid)
console.log(validator.isValid("(({{[[]]}}))")); // true
console.log(validator.isValid("(((")); // false
