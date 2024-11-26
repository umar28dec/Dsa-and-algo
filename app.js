const CelebrityProblem = require("./algo/celebrity");
let n = 3;
let matrix = [
  [0, 1, 1],
  [0, 0, 1],
  [0, 1, 0],
];
let celebrity = new CelebrityProblem(n, matrix);
let id = celebrity.findCelebrity();
console.log(id);
