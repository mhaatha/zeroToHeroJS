// https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/javascript

const findMissingLetter = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (i === array.length - 1) return "";
    
    const nextAlphabet = String.fromCharCode(array[i].charCodeAt(0) + 1);
    if (array[i + 1] !== nextAlphabet) return nextAlphabet;
  }
};

console.log(findMissingLetter(["a", "b", "c", "d", "f"])); // e
console.log(findMissingLetter(["O", "P", "Q", "R", "S"])); // P

