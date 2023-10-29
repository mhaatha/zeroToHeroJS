function digitalRoot(n) {
  let digits = n.toString().split("");
  let realDigits = digits.map(Number);
  let sum = 0;
  for (let i = 0; i < digits.length; i++) {
    sum += realDigits[i];
  }
  let sum1 = 0;
  if (sum > 9) {
    let digits = sum.toString().split("");
    let realDigits = digits.map(Number);
    for (let i = 0; i < realDigits.length; i++) {
      sum1 += realDigits[i];
    } 
    if (sum1 > 9) {
      let digits = sum1.toString().split("");
      let realDigits = digits.map(Number);
      let sum2 = 0;
      for (let i = 0; i < realDigits.length; i++) {
        sum2 += realDigits[i];
      }
      return sum2
    }
    return sum1
  }
  return sum;
}

console.log(digitalRoot(16)); 
console.log(digitalRoot(942)); 
console.log(digitalRoot(132189)); 
console.log(digitalRoot(493193));
