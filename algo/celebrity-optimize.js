class CelebrityProblem {
  constructor(n, matrix) {
    this.n = n;
    this.matrix = matrix;
  }
  findCelebrity() {
    let celeb = 0;
    for (let index = 1; index < this.n; index++) {
      if (this.matrix[celeb][index] === 1) {
        celeb = index;
      }
    }
    for (let index = 0; index < this.n; index++) {
      if (
        index != celeb &&
        (this.matrix[celeb][index] === 1 || this.matrix[index][celeb] === 0)
      ) {
        return -1;
      }
    }
    return celeb;
  }
}
module.exports = CelebrityProblem;

// let n = 4;
// let matrix = [
//   [0, 0, 1, 1],
//   [0, 0, 1, 0],
//   [0, 0, 0, 0],
//   [0, 0, 1, 0],
// ];
// let id = findCelebrity(n, matrix);
// console.log(id);
