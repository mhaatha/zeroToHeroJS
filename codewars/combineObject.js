// https://www.codewars.com/kata/56bd9e4b0d0b64eaf5000819/train/javascript

function combine(...objs) {
  let result = {};

  for (const obj of objs) {
    for (const key in obj) {
      if (Object.hasOwnProperty.call(obj, key)) {
        if (Object.hasOwnProperty.call(result, key)) {
          result[key] += obj[key];
        } else {
          result[key] = obj[key];
        }
      }
    }
  }
  return result;
}
const objA = { a: 10, b: 20, c: 30 };
const objB = { a: 3, c: 6, d: 3 };
const objC = { a: 5, d: 11, e: 8 };
const objD = { c: 3 };
const objE = { a: 100, b: 123, c: 3, z: 12 };
console.log(combine(objA, objB)); // Returns { a: 13, b: 20, c: 36, d: 3 }
console.log(combine(objA, objC, objD)); // Returns { a: 15, b: 20, c: 33, d: 11, e: 8 }
