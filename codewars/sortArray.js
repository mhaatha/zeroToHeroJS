// https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c/train/javascript

function sortByLength(array) {
  return array.sort((a, b) => { return a.length - b.length; });
}

console.log(sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"])); // ["Eyes", "Glasses", "Monocles", "Telescopes"]
