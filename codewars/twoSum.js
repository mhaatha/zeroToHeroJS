// https://www.codewars.com/kata/52c31f8e6605bcc646000082/train/javascript

// Too slow of course this is my answer
// const twoSum = (numbers, target) => {
//   const result = [];
//   for (let i = 0; i < numbers.length; i++) {
//     for (let j = 0; j < numbers.length; j++) {
//       if (result.length === 2) break;
//       if (i === j) {
//         continue;
//       } else {
//         const total = numbers[i] + numbers[j];
//         if (total === target) {
//           result.push(i);
//           result.push(j);
//           break;
//         }
//       }
//     }
//   }
//   return result
// };

// Top answer still slow but not like my code :(
// const twoSum = (numbers, target) => {
//   for (let i = 0; i < numbers.length; i++) {
//     for (let j = i + 1; j < numbers.length; j++) {
//       if (numbers[i] + numbers[j] === target) return [i, j];
//     }
//   }
// };

// Best practice (maybe) using Map
const twoSum = (numbers, target) => {
  const seen = new Map();
  for (let i = 0; i < numbers.length; i++) {
    let x = numbers[i];
    let y = target - x;
    if (seen.has(y)) return [seen.get(y), i];
    seen.set(x, i);
  }
};

// console.log(twoSum([1, 2, 3], 4));
console.log(twoSum([3, 2, 4], 6));
