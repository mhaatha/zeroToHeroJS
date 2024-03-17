// https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/javascript

const narcissistic = (value) => {
  const splittedValue = value.toString().split('');
  const result = splittedValue.reduce((accumulator, currentValue) => {
    const returns = Math.pow(currentValue, splittedValue.length);
    accumulator += returns;
    return accumulator;
  }, 0);

  if (result === value) {
    return true;
  } else {
    return false;
  }
};

console.log(narcissistic(153)); // true
console.log(narcissistic(1652)); // false
