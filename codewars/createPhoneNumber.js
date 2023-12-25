// https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript

const createPhoneNumber = (numbers) => {
  const beginningNumbers = numbers.splice(0, 3).join('');
  const secondNumbers = numbers.splice(0, 3).join('');
  const lastNumbers = numbers.join('');

  return `(${beginningNumbers}) ${secondNumbers}-${lastNumbers}`;
};

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // (123) 456-7890
