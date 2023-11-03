// https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript

function isIsogram(str) {
  let toLower = str.toLowerCase();
  for (let i = 0; i < toLower.length; i++) {
    if (toLower.indexOf(toLower[i]) !== i) {
      return false;
    }
  }
  return true;
}
console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("moose"));
console.log(isIsogram("aba"));
