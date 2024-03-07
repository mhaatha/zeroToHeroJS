// https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript

const findOutlier = (integers) => {
  const oddOrEven = [];
  for (let i = 0; i < 3; i++) {
    oddOrEven.push(integers[i] % 2);
  }
  let result = oddOrEven.filter((word) => {
    oddOrEven.shift();
    return oddOrEven.includes(word);
  });

  if (Math.abs(result[0]) === 0) {
    result = 1;
  } else if (Math.abs(result[0]) === 1) {
    result = 0;
  }

  for (let i = 0; i < integers.length; i++) {
    if (Math.abs(integers[i] % 2) === result) {
      return integers[i];
    }
  }
};

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])); // 11 (the only odd number)
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21])); // 160 (the only even number)
