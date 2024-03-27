// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript

const high = (x) => {
  const splittedString = x.split(" ");
  let highestWord = 0;
  let result = "";

  for (let i = 0; i < splittedString.length; i++) {
    let currentWord = splittedString[i]
      .split("")
      .reduce((acc, val) => acc + val.charCodeAt(0) - 96, 0);
    if (currentWord > highestWord) {
      highestWord = currentWord;
      result = splittedString[i];
    }
  }
  return result;
};

console.log(high("man i need a taxi up to ubud")); // "taxi"
console.log(high("what time are we climbing up the volcano")); // "volcano"
console.log(high("take me to semynak")); // "semynak"
