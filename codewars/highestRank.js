/* eslint-disable no-restricted-syntax */
// https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004/train/javascript

function highestRank(arr) {
  const container = {};
  let biggest = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (container[arr[i]] === undefined) {
      container[arr[i]] = 1;
    } else {
      container[arr[i]] += 1;
    }
    if (biggest <= container[arr[i]]) {
      biggest = container[arr[i]];
    }
  }
  function biggestProperty(obj) {
    let maxKey = null;
    let maxValue = -1;
    // eslint-disable-next-line guard-for-in
    for (const key in obj) {
      const value = obj[key];

      if (value > maxValue || (value === maxValue && parseInt(key, 10) > parseInt(maxKey, 10))) {
        maxKey = key;
        maxValue = value;
      }
    }
    return maxKey;
  }
  return parseInt(biggestProperty(container), 10);
}

console.log(highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10])); // 3
console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10])); // 12
console.log(highestRank([1, 2, 3, 4, 5, 6, 7, 8, 9])); // 9
