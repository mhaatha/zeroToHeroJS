// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

function getCount(str) {
  let count = 0;
  let vocalLetter = "aiueo";
  for (let i = 0; i < str.length; i++) {
    if (vocalLetter.includes(str[i])) {
      count++;
    }
  }
  return count
}

console.log(getCount("abracadabra")); // 5
