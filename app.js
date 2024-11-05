const containsArray = require("./algo/57-containsArray");
const { performance } = require("perf_hooks");
const array1 = ["z1", "y1", "i1"];
const array2 = ["z", "y", "x", ""];

function measureMemoryAndTime(fn, ...args) {
  const startMemory = process.memoryUsage().heapUsed;
  const startTime = performance.now();
  const result = fn(...args);

  const endMemory = process.memoryUsage().heapUsed;
  const endTime = performance.now();

  const memoryUsed = endMemory - startMemory;
  const timeTaken = endTime - startTime;

  console.log(`Result: ${result}`);
  console.log(`Memory used by function: ${memoryUsed.toFixed(2)} bytes`);
  console.log(`Time taken by function: ${timeTaken.toFixed(2)} ms`);
}

measureMemoryAndTime(containsArray, array1, array2);
