// https://www.codewars.com/kata/51e0007c1f9378fa810002a9/train/javascript

/*
Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:

    i increments the value (initially 0)
    d decrements the value
    s squares the value
    o outputs the value into the return array

Invalid characters should be ignored.
*/

const parse = (data) => {
  let value = 0;
  const result = [];
  const splittedString = data.split('');

  for (let i = 0; i < splittedString.length; i++) {
    if (splittedString[i] === 'i') {
      value++;
    } else if (splittedString[i] === 'd') {
      value--;
    } else if (splittedString[i] === 's') {
      value *= value;
    } else if (splittedString[i] === 'o') {
      result.push(value);
    }
  }
  return result;
};

console.log(parse('iiisdoso'));

const parseBestPractice = (data) => {
  const result = [];

  data.split('').reduce((accumulator, currentValue) => {
    if (currentValue === 'i') accumulator++;
    if (currentValue === 'd') accumulator--;
    if (currentValue === 's') accumulator *= accumulator;
    if (currentValue === 'o') result.push(accumulator);

    return accumulator;
  }, 0);

  return result;
};

console.log(parseBestPractice('iiisdoso'));

const array = [15, 16, 17, 18, 19];

array.reduce((accumulator, currentValue, index) => {
  const returns = accumulator + currentValue;
  console.log(
    `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`
  );
  return returns;
});
