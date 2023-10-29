function arrayDiff(a, b) {
  return a.filter(item => !b.includes(item))
}

console.log(arrayDiff([1, 2], [1]));
console.log(arrayDiff([1, 2, 2, 2, 3], [2]));
console.log(arrayDiff([1, 2, 2], [1]));
console.log(arrayDiff([1, 2, 3], [1, 2]));
