class CelebrityProblem {
  constructor(n, matrix) {
    this.n = n;
    this.matrix = matrix;
    this.indegree = new Array(n).fill(0);
    this.outdegree = new Array(n).fill(0);
  }
  findCelebrity() {
    for (let index = 0; index < this.n; index++) {
      for (let indexInner = 0; indexInner < this.n; indexInner++) {
        const value = this.matrix[index][indexInner];
        this.indegree[index] += value;
        this.outdegree[indexInner] += value;
      }
    }
    for (let i = 0; i < this.n; i++) {
      if (this.outdegree[i] === this.n - 1 && this.indegree[i] === 0) {
        return i;
      }
    }
    return -1;
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
