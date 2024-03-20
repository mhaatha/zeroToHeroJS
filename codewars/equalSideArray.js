// https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/javascript

// Convert the integer of array into string and split the array
// Looping through the array 
// In each loop, we devide the array into two parts, left and right which divided by index i 
// Sum the left and the right
// Compare the left and the right
// If the value is same, we return the index
// But in the end of looping the value is never same, we return -1

const findEvenIndex = (arr) => {
  let left = 0;
  let right = 0;
  const intToStr = arr.toString().split(",");

  for (let i = 0; i < intToStr.length; i++) {
    left = intToStr.slice(0, i);
    right = intToStr.slice(i + 1, intToStr.length);

    left = left.reduce((accumulator, currentValue) => Number(accumulator) + Number(currentValue), 0);
    right = right.reduce((accumulator, currentValue) => Number(accumulator) + Number(currentValue), 0);
    if (left === right) return i;
  }
  return -1;
};

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1])); // 3
console.log(findEvenIndex([1, 100, 50, -51, 1, 1])); // 1
console.log(findEvenIndex([20,10,-80,10,10,15,35])); // 1
