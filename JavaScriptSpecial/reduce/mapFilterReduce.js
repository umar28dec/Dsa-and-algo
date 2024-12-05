class ArrayForReduce {
  constructor(array) {
    this.array = array;
  }
  map() {
    return this.array.map((value, index, arr) => {
      return value - 1;
    });
  }
  reduce() {
    return this.array.reduce((acc, curr) => {
      return acc + curr;
    }, 0);
  }
  filter() {
    return this.array.filter((value) => value > 23);
  }
}

module.exports = ArrayForReduce;
