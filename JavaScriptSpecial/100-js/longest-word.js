class StringSplitter {
  constructor(sentence) {
    this.sentence = sentence.trim();
  }

  splitWords() {
    let longSentence = "";
    let max = 0;
    this.sentence.split(" ").forEach((element) => {
      {
        const len = element.length;
        if (len > max) {
          max = len;
          longSentence = element;
        }
      }
    });

    return longSentence;
  }
}
module.exports = StringSplitter;
// // Usage
// const splitter = new StringSplitter("  JavaScript  is   awesome  ");
// const words = splitter.splitWords();
// console.log(words);
