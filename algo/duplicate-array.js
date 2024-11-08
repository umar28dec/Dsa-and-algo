const duplicate1 = () => {
  let result = [];
  const arr = [12, 11, 40, 12, 5, 6, 5, 12, 11];
  result = [...new Set([...arr])];
  console.log(result);
};

const duplicate = () => {
  let result = {};
  let arrResult = [];
  const arr = [12, 11, 40, 12, 5, 6, 5, 12, 11];
  for (const num of arr) {
    result[num] = num;
  }
  for (let key in result) {
    arrResult.push(key);
  }
  console.log(arrResult);
};

module.exports = { duplicate, duplicate1 };
