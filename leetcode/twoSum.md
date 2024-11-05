# Two Sum Problem

## Problem Statement

Given an array of integers `nums` and an integer `target`, return the indices of the two numbers such that they add up to the `target`.

- You may assume that each input would have exactly one solution.
- You may not use the same element twice.
- The answer can be returned in any order.

## Examples

### Example 1
- **Input:** `nums = [2,7,11,15]`, `target = 9`
- **Output:** `[0,1]`
- **Explanation:** Since `nums[0] + nums[1] == 9`, we return `[0, 1]`.

### Example 2
- **Input:** `nums = [3,2,4]`, `target = 6`
- **Output:** `[1,2]`

### Example 3
- **Input:** `nums = [3,3]`, `target = 6`
- **Output:** `[0,1]`

## Constraints

- `2 <= nums.length <= 10^4`
- `-10^9 <= nums[i] <= 10^9`
- `-10^9 <= target <= 10^9`
- There is exactly one valid answer.

## Follow-up

Can you come up with an algorithm that has a time complexity less than `O(n^2)`?

### Way - 1

```javaScript
const twoSum = function (nums, target) {
  let x = nums.length;
  for (let i = 0; i < x - 1; i++) {
    for (let j = i + 1; j < x; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
};
```

### Way - 2
```javaScript
const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    let temp = target - nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (temp === nums[j]) {
        return [i, j];
      }
    }
  }
};
```

### Way - 3
```javaScript
let twoSum = function(nums, target) {
    const num1 = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (num1.has(complement)) {
            return [num1.get(complement), i];
        }
        num1.set(nums[i], i);
    }
    return [];
};
```