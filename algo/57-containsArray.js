// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
//For Example:
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'i'];
//should return false.
//-----------
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'x'];
//should return true.

// 2 parameters - arrays - no size limit
// return true or false
const containsArray = () => {
  const arr1 = ["z1", "y1", "i1"];
  const arr2 = ["z", "y", "x", ""];
  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      map[arr1[i]] = true;
    }
  }
  console.log(map);
  for (let index = 0; index < arr2.length; index++) {
    if (map[arr2[index]]) {
      return true;
    }
  }
  return false;
};

module.exports = containsArray;
