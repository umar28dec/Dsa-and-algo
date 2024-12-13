class NumberAnalyzer {
  constructor(arr) {
    this.arr = arr;
  }

  findMissingAndRepeating() {
    const n = Math.max(...this.arr);
    const frequency = Array(n + 1).fill(0);

    for (const num of this.arr) {
      if (num <= n) frequency[num]++;
    }

    let missing = [];
    let repeating = [];

    for (let i = 1; i <= n; i++) {
      if (frequency[i] === 0) {
        missing.push(i);
      }
      if (frequency[i] > 1) {
        repeating.push(i);
      }
    }

    return { missing, repeating };
  }
}

module.exports = NumberAnalyzer;

// const arr = [4, 3, 6, 2, 1, 3, 5];
// const analyzer = new NumberAnalyzer(arr);
// const result = analyzer.findMissingAndRepeating();
// console.log(result);
