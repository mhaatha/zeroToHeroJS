// https://www.codewars.com/kata/5a431c0de1ce0ec33a00000c/train/javascript

function evenNumbers(array, number) {
  let result = [];
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] % 2 === 0) {
      result.push(array[i]);
      if (result.length === number) {
        break;
      }
    }
  }
  return result.reverse()
}

console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)); // [4, 6, 8]
console.log(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, 4, -6, -10, 12], 4)); // [-8, 26]
