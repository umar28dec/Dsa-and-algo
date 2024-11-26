const CelebrityProblem = require("./algo/celebrity-optimize");
let n = 3;
let matrix = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];
let celebrity = new CelebrityProblem(n, matrix);
let id = celebrity.findCelebrity();
console.log(id);
