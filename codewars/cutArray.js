// https://www.codewars.com/kata/58ac59d21c9e1d7dc5000150/train/javascript

function makeParts(arr, chunkSize) {
  let result = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    let chunk = arr.length % chunkSize;
    if (chunk !== 0) {
      result.push(arr.slice(i, i + chunkSize));
    } else {
      result.push(arr.slice(i, i + chunkSize));
    }
  }
  return result;
}
console.log(makeParts([10, 20, 30, 40, 50, 60, 70, 80, 90], 2));
console.log(makeParts([10, 20, 30, 40, 50, 60, 70, 80], 2));
console.log(makeParts([1, 2, 3, 4, 5, 6, 7], 3));
console.log(makeParts([1, 2, 3], 4));
