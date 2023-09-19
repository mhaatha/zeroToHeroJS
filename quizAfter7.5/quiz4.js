//   Problem
//   Diberikan sebuah function xo(str) yang menerima satu parameter berupa string.
//   Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

function xo(str) {
  let karakterX = "x";
  let karakterO = "o";
  let countX = 0;
  let countO = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === karakterX) {
      countX++;
    }
  }
  let hasilX = `${countX}`;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === karakterO) {
      countO++;
    }
  }
  let hasilO = `${countO}`;

  if (hasilX == hasilO) {
    return true;
  } else {
    return false;
  }
}
// TEST CASES
console.log(xo("xoxoxo")); // true
console.log(xo("oxooxo")); // false
console.log(xo("oxo")); // false
console.log(xo("xxxooo")); // true
console.log(xo("xoxooxxo")); // true
console.log(xo("xxxxoxooooxxxoxoxoxoxoxooxoo"));
