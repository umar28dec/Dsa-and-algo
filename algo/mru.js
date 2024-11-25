class MRU {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
    console.log(this.cache);
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size >= this.capacity) {
      const key = Array.from(this.cache.values()).pop();
      this.cache.delete(key);
    }
    this.cache.set(key, value);
    console.log(this.cache);
  }
  get(key) {
    if (!this.cache.has(key)) {
      return -1;
    }
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    console.log(this.cache);

    return value;
  }
}

module.exports = MRU;

// let obj = new MRUCache(3);
// obj.put(1, 1);
// obj.put(2, 2);
// obj.put(3, 3);
// obj.put(4, 4);
// console.log(obj.get(3));
// console.log(obj.get(2));
// obj.put(5, 5);
