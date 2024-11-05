const twoSum = function (nums, target) {
  let num = {};
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (num.hasOwnProperty(diff)) {
      return [i, num[diff]];
    }
    num[nums[i]] = i;
  }
  return null;
};
module.exports = twoSum;
//let nums = [2,7,11,15], target = 9;
