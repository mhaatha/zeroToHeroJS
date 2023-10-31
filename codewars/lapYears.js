// https://www.codewars.com/kata/526c7363236867513f0005ca/train/javascript

function isLeapYear(year) {
  if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
    return true;
  } else if (year % 100 !== 0 && year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isLeapYear(2020));
console.log(isLeapYear(3036));
console.log(isLeapYear(2000));
console.log(isLeapYear(3000));
console.log(isLeapYear(2015));
