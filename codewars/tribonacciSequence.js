// https://www.codewars.com/kata/556deca17c58da83c00002db/train/javascript

function tribonacci(signature, n) {
  let result = [];
  let i = 0;
  if (n > 3) {
    result = signature
    while (result.length !== n) {
      result.push(result[i] + result[i + 1] + result[i + 2]);
      i++;
    }
  }
  if (n < 4) {
    for (let i = 0; i < n; i++) {
      result.push(signature[i]);
    }
  }
  return result;
}

console.log(tribonacci([21, 31, 15], 1));
console.log(tribonacci([14, 16, 15], 0));
console.log(tribonacci([12, 123, 11], 5));
