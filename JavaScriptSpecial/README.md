# **Waterfall Function (using ES5)**

## Overview
This script demonstrates the implementation of a `waterfall` function in vanilla JavaScript (ES5) without using `async/await`, Promises, or external libraries.

The `waterfall` function enables sequential execution of asynchronous functions. Each function passes its result to the next, and the final result is sent to a callback function.

## Features
1. **Arguments**:
   - Accepts an array of asynchronous functions.
   - Includes a final callback function.
2. **Data Flow**:
   - Passes the result of one asynchronous function to the next using `doneCallback`.
   - Values passed in the `doneCallback` of one function are available as parameters to the next function.
3. **Final Output**:
   - Passes the result of the last function to the final callback function.
4. **Error Handling**:
   - If an error occurs during execution, it directly invokes the final callback with the error parameter.

## Code
```javascript
function waterfall (arrayOfFunctions, finalCallback) {
	// Your code here
}

const arrayOfFunctions = [
  function(doneCallback) {
    setTimeout(function() {
      console.log("FIRST");
      doneCallback(null, "b");
    }, 100);
  },
  function(param, doneCallback) {
    setTimeout(function() {
      console.log("SECOND", param);
      doneCallback(null, "c", "d");
    }, 50);
  },
  function(param1, param2, doneCallback) {
    setTimeout(function() {
      console.log("THIRD", param1, param2);
      doneCallback(null, "e");
    }, 10);
  }
];

const finalCallback = function(err, result) {
  console.log("err", err);
  console.log("result", result);
};

waterfall(arrayOfFunctions, finalCallback);
```
# **Expected Output**
```bash
FIRST
SECOND b
THIRD c d
err null
result e
```