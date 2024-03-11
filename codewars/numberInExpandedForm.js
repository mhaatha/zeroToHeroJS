// https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/javascript

// Rumus: 10 pangkat indexOf numToString[j] yang bukan 0 * numToString[i] yang bukan 0

const expandedForm = (num) => {
  const numToString = num.toString();
  let result = '';
  for (let i = 0; i < numToString.length; i++) {
    if (numToString[i] !== '0' && i !== numToString.length - 1) {
      for (let j = numToString.length - 1; j > i; j--) {
        if (numToString[j] !== '0' || numToString[numToString.length - 1] === '0') {
          const pow = Math.pow(10, j - i);
          console.log(pow)
          if (result.length === 0) {
            result += Number(numToString[i]) * pow;
            break;
          } else {
            const total = Number(numToString[i]) * pow;
            result += ` + ${total}`;
            break;
          }
        }
      }
    } else if (numToString[i] !== '0') {
      result += ` + ${numToString[i]}`;
    }
  }
  if (result.length === 0 && num.toString().length > 0) {
    result += num.toString();
  }
  return result;
};

console.log(expandedForm(12)); 
console.log(expandedForm(42)); 
console.log(expandedForm(78832630)); 
