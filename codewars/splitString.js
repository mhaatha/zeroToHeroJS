// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript

const solution = (str) => {
  const result = [];
  let words = [];

  for (let i = 0; i < str.length; i++) {
    words.push(str[i]);
    if (i % 2 === 1) {
      result.push(words.join(""));
      words = [];
    }
    if (i === str.length - 1 && words.length === 1) {
      words[0] = words[0] += "_";
      result.push(words.join(""));
    }
  }

  return result;
};

console.log(solution("abc"));
console.log(solution("abcdef"));

// Best practice
const splitString = (str) => {
  return (str + "_").match(/.{2}/g) || [];
};

console.log(splitString("asdja"));
console.log(splitString("asnajda"));

// Using map
const mapSplitString = (str) => {
  const arr = str.split("");

  return arr
    .map((el, i) => el + (arr.splice(i + 1, 1)[0] || "_"))
    .filter((el) => el);
};

console.log(mapSplitString("thisismap"));
