class FrequencyCount {
  constructor(sentence) {
    this.sentence = sentence.trim();
  }

  frequencyString() {
    let map = new Map();
    this.sentence.split(" ").forEach((element) => {
      {
        element.split("").forEach((elem) => {
          if (map.has(elem)) {
            let cont = map.get(elem);
            map.set(elem, cont + 1);
          } else {
            map.set(elem, 1);
          }
        });
      }
    });
    return map;
  }

  highfrequencyElementString() {
    let map = new Map();
    this.sentence.split(" ").forEach((element) => {
      {
        element.split("").forEach((elem) => {
          if (map.has(elem)) {
            let cont = map.get(elem);
            map.set(elem, cont + 1);
          } else {
            map.set(elem, 1);
          }
        });
      }
    });
    let max = 0;
    let letter = "";
    for (const [key, value] of map.entries()) {
      if (value > max) {
        max = value;
        letter = key;
      }
    }
    return letter;
  }

  frequencyOfDigits() {
    let map = new Map();
    this.sentence = this.sentence.toString();
    for (const elem of this.sentence) {
      if (map.has(elem)) {
        let cont = map.get(elem);
        map.set(elem, cont + 1);
      } else {
        map.set(elem, 1);
      }
    }
    return map;
  }
}
module.exports = FrequencyCount;
// // Usage
// const splitter = new StringSplitter("  JavaScript  is   awesome  ");
// const words = splitter.splitWords();
// console.log(words);
