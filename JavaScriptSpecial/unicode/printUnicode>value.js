class UnicodePrinter {
  constructor() {}
  printRange(start, end, label) {
    console.log(`${label}:`);
    for (let i = start; i <= end; i++) {
      console.log(`Character: ${String.fromCharCode(i)} Unicode: ${i}`);
    }
    console.log("");
  }

  printUppercaseLetters() {
    this.printRange(65, 90, "Uppercase Letters (A-Z)");
  }

  printLowercaseLetters() {
    this.printRange(97, 122, "Lowercase Letters (a-z)");
  }

  printNumbers() {
    this.printRange(48, 57, "Numbers (0-9)");
  }
}
module.exports = UnicodePrinter;
