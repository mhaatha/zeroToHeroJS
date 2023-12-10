// https://www.codewars.com/kata/56419475931903e9d1000087/train/javascript

const oneDown = (str) => {
  if (typeof str !== 'string') {
    return 'Input is not a string';
  }
  let words = '';
  for (let i = 0; i < str.length; i++) {
    let codeNow = str.charCodeAt(i);
    if (codeNow > 65 && codeNow < 91) {
      words += String.fromCharCode(codeNow - 1);
    } else if (codeNow > 97 && codeNow < 123) {
      words += String.fromCharCode(codeNow - 1);
    } else if (codeNow === 65) {
      words += 'z';
    } else if (codeNow === 97) {
      words += 'Z';
    } else {
      words += String.fromCharCode(codeNow);
    }
  }
  return words;
};

console.log(oneDown('Ifmmp')); // Hello
console.log(oneDown('Uif usjdl up uijt lbub jt tjnqmf')); // The trick to this kata is simple
console.log(oneDown(45)); // Input is not a string
