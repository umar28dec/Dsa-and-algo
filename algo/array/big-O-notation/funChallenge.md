# Big O Analysis of `funChallenge` Function

## Question

Analyze the time complexity (Big O) of the following JavaScript function:

```javascript
function funChallenge(input) {
  let a = 10;
  a = 50 + 3;

  for (let i = 0; i < input.length; i++) {
    anotherFunction();
    let stranger = true;
    a++;
  }
  return a;
}
```
# Answer

To determine the time complexity of funChallenge, we’ll analyze each part of the function.
Step-by-Step Analysis
### 1. Initial Operations

```javascript

let a = 10;            // O(1)
a = 50 + 3;            // O(1)
```
These lines are constant-time operations, each with a complexity of O(1)O(1).
### 2. For Loop

```javascript

for (let i = 0; i < input.length; i++) {  // O(n)
    anotherFunction();                   // O(n)
    let stranger = true;                 // O(n)
    a++;                                 // O(n)
}
```
    The loop iterates over input, so it runs n times where n is input.length.

Inside the loop:

```javascript
    anotherFunction() is called once per iteration → O(n)O(n).

    let stranger = true; runs once per iteration → O(n)O(n).

    a++; runs once per iteration → O(n)O(n).

```
### 3. Return Statement

```javascript

return a;  // O(1)
```

The return statement is a constant-time operation with O(1)O(1) complexity.

## Total Time Complexity

Summing up all the operations:
```javascript
    Total: O(1)+O(1)+O(n)+O(n)+O(n)+O(n)+O(1)=O(4n+3)O(1)+O(1)+O(n)+O(n)+O(n)+O(n)+O(1)=O(4n+3)
```
Since we drop constants in Big O notation, this simplifies to:

### Final Big O Complexity: O(n)O(n)

### Conclusion

The function funChallenge has a time complexity of O(n), where n is the length of the input array.