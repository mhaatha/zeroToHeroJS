// https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript

function spinWords(string) {
  const newString = string.split(' ');
  const result = [];
  for (let i = 0; i < newString.length; i += 1) {
    if (newString[i].length > 4) {
      result.push([...newString[i]].reverse().join(''));
    } else {
      result.push(newString[i]);
    }
  }
  return result.join(' ');
}

console.log(spinWords('Welcome'));
console.log(spinWords('Hey fellow warriors'));
