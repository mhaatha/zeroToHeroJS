// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript

const persistence = (num) => {
  let result = num;
  let counter = 0;
  while (result.toString().length > 1) {
    result = result.toString().split('').reduce(
      (accumulator, currentValue) => accumulator * currentValue,
      1
    );
    counter++
  }
  return counter;
};

console.log(persistence(39)); // 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
console.log(persistence(999)); // 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
console.log(persistence(4)); // 0 (because 4 is already a one-digit number)
