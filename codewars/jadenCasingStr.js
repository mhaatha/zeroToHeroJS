// https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/javascript

String.prototype.toJadenCase = function () {
  let word = this.split(" ");
  for (let i = 0; i < word.length; i++) {
    word[i] = word[i][0].toUpperCase() + word[i].slice(1);
  }
  return word.join(" ");
};

let string = "How can mirrors be real if our eyes aren't real";
let jadenCaseString = string.toJadenCase();
console.log(jadenCaseString);
