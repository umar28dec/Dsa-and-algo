class SortString {
  constructor(str) {
    this.string = str.split(" ");
  }
  sort() {
    this.string = [...new Set(this.string)];
    // console.log(this.string);
    return this.string.sort();
  }
}
module.exports = SortString;

// // Usage
// const sortObject = new SortString(
//   "the quick brown fox jumps over bar the lazy a"
// );
// // console.log(reduce.map());
// // console.log(reduce.filter());
// console.log(sortObject.sort());
