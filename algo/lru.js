class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size >= this.capacity) {
      this.cache.delete(this.cache.keys().next().value);
    }
    this.cache.set(key, value);
  }

  get(key) {
    if (!this.cache.has(key)) {
      return -1;
    }
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }
}
module.exports = LRUCache;

// // Example usage
// const obj = new LRUCache(2);
// obj.put(1, 1);
// obj.put(2, 2);
// console.log(obj.get(1)); // Output: 1

// obj.put(3, 3); // Removes key 2
// console.log(obj.get(2)); // Output: -1 (not found)
