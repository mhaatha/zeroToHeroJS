// https://www.codewars.com/kata/52de553ebb55d1fca3000371/train/javascript

// eslint-disable-next-line func-names, consistent-return
const findMissing = function (list) {
  const diff = list[2] - list[1];
  for (let i = 0; i < list.length - 1; i += 1) {
    if (list[i + 1] - list[i] !== diff) return list[i] + diff;
  }
};

console.log(findMissing([1, 3, 5, 9, 11]));
console.log(findMissing([1, 3, 4]));
console.log(findMissing([0, 2, 3]));
console.log(findMissing([0, 1, 3]));
console.log(findMissing([1, 3, 5, 7, 9, 11]));
console.log(
  findMissing([
    -1000, -2000, -3000, -5000, -6000, -7000, -8000, -9000, -11000, -12000,
    -13000, -15000, -16000, -17000, -18000, -19000, -21000, -22000, -23000,
    -25000,
  ]),
);
console.log(
  findMissing([
    -1000, -2000, -3000, -5000, -6000, -7000, -8000, -9000, -11000, -12000,
    -13000, -15000, -16000, -17000, -18000, -19000, -21000, -22000, -23000,
    -25000,
  ]),
);
console.log(
  findMissing([
    -2000, -4000, -6000, -8000, -10000, -12000, -14000, -16000, -18000, -20000,
    -22000, -24000, -26000, -28000, -30000, -32000, -34000, -36000, -38000,
    -40000,
  ]),
);
