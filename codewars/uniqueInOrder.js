// https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript

function uniqueInOrder(iterable) {
  let container = [];
  for (let i = 0; i < iterable.length; i++) {
    let test = iterable[i];
    if (iterable[i + 1] !== test) {
      container.push(iterable[i]);
    }
  }
  return container;
}

console.log(uniqueInOrder("AAAABBBCCDAABBB")); // ['A', 'B', 'C', 'D', 'A', 'B']
console.log(uniqueInOrder("ABBCcAD")); // ['A', 'B', 'C', 'c', 'A', 'D']
console.log(uniqueInOrder([1, 2, 2, 3, 3])); // [1,2,3]
