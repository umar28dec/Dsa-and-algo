# Big O Analysis of `anotherFunChallenge` Function

## Question

What is the Big O of the following function? (Hint: Analyze line by line.)

```javascript
function anotherFunChallenge(input) {

    let a = 5; // O(1)
    let b = 10; // O(1)
    let c = 50; // O(1)

    for (let i = 0; i < input; i++) { // O(n)
        let x = i + 1; // O(n)
        let y = i + 2; // O(n)
        let z = i + 3; // O(n)
    }

    for (let j = 0; j < input; j++) { // O(n)
        let p = j * 2; // O(n)
        let q = j * 2; // O(n) 
    }

    let whoAmI = "I don't know"; // O(1)
}
```
## Explanation

To determine the time complexity of anotherFunChallenge, we’ll analyze each line or block of code individually to assess its impact on performance as the input size n grows.

## Step-by-Step Analysis
### Initial Operations

```javascript

let a = 5;    // O(1)
let b = 10;   // O(1)
let c = 50;   // O(1)
```

These are constant-time operations that occur only once, regardless of the input size. Thus, each operation has a time complexity of O(1)O(1).

### First For Loop

```javascript

for (let i = 0; i < input; i++) {  // O(n)
    let x = i + 1;                // O(n)
    let y = i + 2;                // O(n)
    let z = i + 3;                // O(n)
}
```

The for loop iterates n times where n is equal to the value of input.

Inside the loop:

Each statement (let x = i + 1;, let y = i + 2;, let z = i + 3;) executes once per iteration.

## Total time complexity for this loop:
```javascript 
O(n)+O(n)+O(n)+O(n)=O(4n)O(n)+O(n)+O(n)+O(n)=O(4n).
```

### Second For Loop

```javascript

for (let j = 0; j < input; j++) {  // O(n)
    let p = j * 2;                // O(n)
    let q = j * 2;                // O(n)
}
```
This loop also iterates n times where n is the value of input.

Each statement (let p = j * 2; and let q = j * 2;) executes once per iteration.

### Total time complexity for this loop: 
```javascript

O(n)+O(n)+O(n)=O(3n)O(n)+O(n)+O(n)=O(3n).
```

### Final Operation

```javascript

    let whoAmI = "I don't know";  // O(1)

    This is a single, constant-time operation with a complexity of O(1)O(1).
```

## Total Time Complexity

Summing up all the operations:

Total Complexity:
```javascript 
O(1)+O(1)+O(1)+O(4n)+O(3n)+O(1)=O(7n+4)O(1)+O(1)+O(1)+O(4n)+O(3n)+O(1)=O(7n+4)
```
Since constants are not considered in Big O notation, this simplifies to:

### Final Big O Complexity: 
```javascript
O(n)O(n)
```

## Conclusion

The function anotherFunChallenge has a time complexity of O(n). This means that as the input size grows, the time taken by this function will grow linearly in proportion to the input size.