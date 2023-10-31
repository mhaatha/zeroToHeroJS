// https://www.codewars.com/kata/529e2e1f16cb0fcccb000a6b/train/javascript

// Hitung angka dasar, caranya dengan num / parts

function splitInteger(num, parts) {
  let baseNumber = num / parts;
  let sisaPembagian = num % parts;
  let container = [];
  for (let i = 0; i < parts; i++) {
    if (i < sisaPembagian) {
      container.push(Math.round(baseNumber + 1));
    } else {
      container.push(Math.round(baseNumber));
    }
  }
  return container.sort();
}

console.log(splitInteger(20, 6)); // [3, 3, 3, 3, 4, 4]
console.log(splitInteger(10, 2)); // [5, 5]
