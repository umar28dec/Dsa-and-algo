# **JavaScript - Intersection of Multiple Arrays**

## Task Overview

In this task, you will write a JavaScript function called **`intersection`** that computes the common elements from multiple input arrays.

## Requirements
- The function should:
  - Take multiple arrays as input parameters.
  - Return an array containing the elements that are common to **all** input arrays.
- The function should handle any number of input arrays.

## Time Limit
You are expected to complete this task within **20 minutes**.

## Function Signature
```javascript
function intersection(...arrays) {
    // Your implementation here
}
```

## Example Input
```javascript
intersection(
    ['1', 'A', '@#', '3', 'Q', 'B', '17'],
    ['Z', '1', 'GO', '3', 'A', '@#'],
    ['T', '@#', '1', 'A', '8'],
    ['100', '150', '@#', '300', '500', '1', 'A', 'SO']
);
```

The function should return **`['1', 'A', '**@#**']**` as these are the elements that are common to all the input arrays.

It is important to write an efficient solution with a good time complexity for handling large input arrays.