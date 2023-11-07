// https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/javascript

function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/g.test(pin);
}

console.log(validatePIN("1234"));
console.log(validatePIN("12345"));
console.log(validatePIN("a234"));
