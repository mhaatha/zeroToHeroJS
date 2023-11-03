// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript

function reverseWords(str) {
  let array = str.split(" "); // [ 'This', 'is', 'an', 'example!' ]
  let result = "";
  for (let i = 0; i < array.length; i++) {
    if (array[i].length !== 0) {
      for (let j = array[i].length - 1; j >= 0; j--) {
        result += array[i][j];
      }
    }
    if (array[i] !== array[array.length - 1]) {
      result += " ";
    }
  }

  return result;
}
console.log(reverseWords("This is an example!")); // "sihT si na !elpmaxe"
console.log(reverseWords("double  spaces")); // "elbuod  secaps"
console.log(reverseWords("olleholleh")); // "hello hello"
