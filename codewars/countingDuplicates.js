// www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript

function duplicateCount(text) {
  let counter = 0;
  const object = {};
  const lowerText = text.toLowerCase();
  for (let i = 0; i < lowerText.length; i += 1) {
    if (object[lowerText[i]] === undefined) {
      object[lowerText[i]] = 1;
    } else {
      if (object[lowerText[i]] === 1) {
        counter += 1;
      }
      object[lowerText[i]] += 1;
    }
  }
  return counter;
}

console.log(duplicateCount('invisibleomniboys'));
console.log(duplicateCount('ababcde'));
