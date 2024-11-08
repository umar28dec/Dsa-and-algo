const duplicateArray = require("./algo/duplicate-array");
const { performance } = require("perf_hooks");

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

measureMemoryAndTime(duplicateArray.duplicate);
