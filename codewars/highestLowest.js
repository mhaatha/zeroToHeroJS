// https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

function highAndLow(numbers) {
  let strNum = numbers.split(" ");
  let realNumber = strNum.map(Number);
  let lowest = realNumber[0];
  let highest = realNumber[0];
  for (let i = 0; i < realNumber.length; i++) {
    if (realNumber[i] > highest) {
      highest = realNumber[i];
    } else if (realNumber[i] < lowest) {
      lowest = realNumber[i];
    }
  }
  return `${highest} ${lowest}`;
}

console.log(highAndLow("1 2 3 4 5 10"));
console.log(highAndLow("1 2 3 4 5 -10"));
console.log(highAndLow("8 -1 42 -9"));
