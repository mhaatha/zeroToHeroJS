// https://www.codewars.com/kata/5a04133e32b8b998dc000089/train/javascript

function solve(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let currentArray = arr[i];
    for (let j = i; j < arr.length; j++) {
      if (currentArray < arr[j]) {
        currentArray = 0;
      }
    }
    if (currentArray > 0 && !result.includes(currentArray)) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(solve([16, 17, 14, 3, 14, 5, 2])); // [17,14,5,2]
console.log(solve([104, 18, 37, 9, 36, 47, 28])); // [104,47,28]
