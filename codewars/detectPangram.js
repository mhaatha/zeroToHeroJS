// https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript

function isPangram(string) {
  let result = "";
  let words = string.match(/\w/gi);
  for (let i = 0; i < words.length; i++) {
    result += words[i];
  }
  let lowerCase = result.toLowerCase();
  let letters = "abcdefghijklmnopqrstuvwxyz";
  let counter = 0;
  // From this:
    // if (
  //   lowerCase.includes("a") &&
  //   lowerCase.includes("b") &&
  //   lowerCase.includes("c") &&
  //   lowerCase.includes("d") &&
  //   lowerCase.includes("e") &&
  //   lowerCase.includes("f") &&
  //   lowerCase.includes("g") &&
  //   lowerCase.includes("h") &&
  //   lowerCase.includes("i") &&
  //   lowerCase.includes("j") &&
  //   lowerCase.includes("k") &&
  //   lowerCase.includes("l") &&
  //   lowerCase.includes("m") &&
  //   lowerCase.includes("n") &&
  //   lowerCase.includes("o") &&
  //   lowerCase.includes("p") &&
  //   lowerCase.includes("q") &&
  //   lowerCase.includes("r") &&
  //   lowerCase.includes("s") &&
  //   lowerCase.includes("t") &&
  //   lowerCase.includes("u") &&
  //   lowerCase.includes("v") &&
  //   lowerCase.includes("w") &&
  //   lowerCase.includes("x") &&
  //   lowerCase.includes("y") &&
  //   lowerCase.includes("z")
  // ) {
  //   return true;
  // } else {
  //   return false;
  // }
  // To this:
  for (let i = 0; i < lowerCase.length; i++) {
    if (letters.includes(lowerCase[i])) {
      counter++;
      let index = letters.indexOf(lowerCase[i]);
      letters = letters.replace(letters[index], "");
    }
  }
  if (counter === 26) {
    return true;
  } else {
    return false;
  } 
}

console.log(isPangram("The quick brown fox jumps over the lazy dog")); // True
console.log(isPangram("The")); // False
