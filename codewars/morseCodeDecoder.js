// https://www.codewars.com/kata/54b724efac3d5402db00065e/train/javascript

const decodeMorse = (morseCode) => {
  let space = 0;
  let morse = "";
  let result = "";
  const trimmedMorse = morseCode.trimStart().trimEnd();
  const morseToLetter = {
    ".-": "A",
    "-...": "B",
    "-.-.": "C",
    "-..": "D",
    ".": "E",
    "..-.": "F",
    "--.": "G",
    "....": "H",
    "..": "I",
    ".---": "J",
    "-.-": "K",
    ".-..": "L",
    "--": "M",
    "-.": "N",
    "---": "O",
    ".--.": "P",
    "--.-": "Q",
    ".-.": "R",
    "...": "S",
    "-": "T",
    "..-": "U",
    "...-": "V",
    ".--": "W",
    "-..-": "X",
    "-.--": "Y",
    "--..": "Z",
    "...---...": "SOS",
    "-.-.--": "!",
    ".-.-.-": ".",
  };

  for (let i = 0; i < trimmedMorse.length; i++) {
    if (trimmedMorse[i] !== " ") {
      morse += trimmedMorse[i];
      space = 0;
    } else {
      space += 1;
    }
    if (trimmedMorse[i] === " " && trimmedMorse[i + 1] !== " ") {
      result += morseToLetter[morse];
      morse = "";
    } else if (i === trimmedMorse.length - 1) {
      result += morseToLetter[morse];
      morse = "";
    }
    if (space === 3) {
      result += " ";
      space = 0;
    }
  }
  return result;
};

console.log(decodeMorse(".... . -.--   .--- ..- -.. .")); // "HEY JUDE"
console.log(decodeMorse("   .... . -.--   ")); // "HEY"
