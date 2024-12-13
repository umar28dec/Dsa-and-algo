class GenerateHash {
  constructor(string) {
    this.string = string;
  }
  generate() {
    if (this.string == "" || this.string.length > 280) {
      return false;
    }
    this.string = this.string.split(" ");
    let result = "#";
    this.string.forEach((element) => {
      result += element[0].toUpperCase() + element.substring(1, element.length);
    });
    return result;
  }
}
module.exports = GenerateHash;
