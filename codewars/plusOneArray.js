/* eslint-disable no-param-reassign */
// https://www.codewars.com/kata/5514e5b77e6b2f38e0000ca9/train/javascript

const upArray = (arr) => {
  if (arr.some((n) => n < 0 || n > 9) || !arr.length) return null;
  let carry = 1;

  for (let i = arr.length - 1; i >= 0; i -= 1) {
    arr[i] += carry;
    if (arr[i] > 9) {
      arr[i] = 0;
    } else {
      carry = 0;
    }
  }

  if (carry) arr.unshift(1);

  return arr;
};

console.log(upArray([4, 3, 2, 5])); // [4, 3, 2, 6]
console.log(upArray([1, 2, 3, 9])); // [1, 2, 4, 0]
console.log(upArray([9, 9, 9, 9])); // [1, 0, 0, 0, 0]
console.log(upArray([0, 1, 3, 7])); // [0, 1, 3, 8]
