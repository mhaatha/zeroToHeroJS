function printerError(s) {
  let correctLetters = "abcdefghijklm";
  let errorCounter = 0;
  for (let i = 0; i < correctLetters.length; i++) {
    for (let j = 0; j < s.length; j++) {
      if (correctLetters[i] === s[j]) {
        errorCounter++;
      }
    }
  }
  return `${s.length - errorCounter}/${s.length}`;
}

console.log(printerError("aaabbbbhaijjjm"));
console.log(printerError("aaaxbbbbyyhwawiwjjjwwm"));

