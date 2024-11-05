# Big O Cheat Sheet

## Big O Notations

- **O(1)** Constant - no loops
- **O(log N)** Logarithmic - usually applies to searching algorithms with sorted data (e.g., Binary Search)
- **O(n)** Linear - typical for loops or `while` loops that go through `n` items
- **O(n log(n))** Log Linear - often seen in sorting operations
- **O(n^2)** Quadratic - every element in a collection is compared to every other element (e.g., nested loops)
- **O(2^n)** Exponential - often applies to recursive algorithms solving problems of size `N`
- **O(n!)** Factorial - applies when a new loop is added for every element

> **Note:** Iterating through half a collection is still O(n).  
> **Two separate collections:** Time complexity becomes **O(a * b)**.

## What Can Cause Time in a Function?

- Operations (`+`, `-`, `*`, `/`)
- Comparisons (`<`, `>`, `==`)
- Looping (`for`, `while`)
- Function calls (`function()`)

## Big O Rule Book

1. **Always consider the worst case.**
2. **Remove constants** when analyzing Big O complexity.
3. **Different inputs should have different variables**:
   - Example: **O(a + b)** when two inputs are separate arrays.
   - Example: **O(a * b)** for nested loops with two different inputs.
   - Use `+` for sequential steps and `*` for nested steps.
4. **Drop non-dominant terms** to simplify complexity.

## What Causes Space Complexity?

- Variables
- Data structures (e.g., arrays, objects)
- Function calls
- Allocations (e.g., memory for new data structures)
