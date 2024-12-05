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
