// https://www.codewars.com/kata/56a5d994ac971f1ac500003e/train/javascript

const longestConsec = (strArr, k) => {
  if (strArr.length < k) return "";

  let highestStr = 0;
  let result = "";
  for (let i = 0; i < strArr.length; i++) {
    let longestArr = [];
    for (let j = i; j < strArr.length; j++) {
      if (j < i + k) {
        longestArr.push([strArr[j]]);
      }
    }
    if (longestArr.join("").length > highestStr) {
      highestStr = longestArr.join("").length;
      result = longestArr.join("");
    }
  }
  return result;
};

console.log(
  longestConsec(["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], 2)
); // "folingtrashy"
console.log(
  longestConsec(["wlwsasphmxx", "owiaxujylentrklctozmymu", "wpgozvxxiu"], 2)
); // "wlwsasphmxxowiaxujylentrklctozmymu"

// Best Practice
const bestPracticeConsec = (strarr, k) => {
  let longest = "";
  for (let i = 0; k > 0 && i <= strarr.length - k; i++) {
    let tempArray = strarr.slice(i, i + k);
    let tempStr = tempArray.join("");
    if (tempStr.length > longest.length) longest = tempStr;
  }

  return longest
};

console.log(
  bestPracticeConsec(["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], 2)
); // "folingtrashy"
console.log(
  bestPracticeConsec(["wlwsasphmxx", "owiaxujylentrklctozmymu", "wpgozvxxiu"], 2)
); // "wlwsasphmxxowiaxujylentrklctozmymu"
