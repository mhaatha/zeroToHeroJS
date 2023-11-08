// https://www.codewars.com/kata/515f51d438015969f7000013/train/javascript

function pyramid(n) {
  let result = [];
  let oneArray = [];
  for (let i = 0; i < n; i++) {
    oneArray.push(1);
    result.push(oneArray.slice(0));
  }
  return result;
}
console.log(pyramid(3));
