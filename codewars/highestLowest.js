// https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

function highAndLow(numbers) {
  let strNum = numbers.split(" ");
  let realNumber = strNum.map(Number);
  return `${Math.max(...realNumber)} ${Math.min(...realNumber)}`;
}

console.log(highAndLow("1 2 3 4 5 10"));
console.log(highAndLow("1 2 3 4 5 -10"));
console.log(highAndLow("8 -1 42 -9"));
