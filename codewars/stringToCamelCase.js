// https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript

const toCamelCase = (str) => {
  const splittedWord = str.split(/[-_]/g);
  let result = '';
  for (let i = 0; i < splittedWord.length; i++) {
    if (i !== 0) {
      splittedWord[i] = splittedWord[i][0].toUpperCase() + splittedWord[i].substring(1);
      result += splittedWord[i];
    } else {
      result += splittedWord[i];
    }
  }
  return result;
};

console.log(toCamelCase('the-stealth-warrior')); // "theStealthWarrior"
console.log(toCamelCase('The_Stealth_Warrior')); // "TheStealthWarrior"
console.log(toCamelCase('The_Stealth-Warrior')); // "TheStealthWarrior"
