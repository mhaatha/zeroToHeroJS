// https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript

const order = (words) => {
  if (words.length < 1) return '';
  const result = [];
  const nums = [];
  const splittedWords = words.split(' ');

  for (let i = 0; i < splittedWords.length; i++) {
    const currentIndex = splittedWords[i].match(/\d+/g);
    nums.push(Number(...currentIndex));
  }

  for (let i = 1; i <= splittedWords.length; i++) {
    const currentIndex = splittedWords[i - 1].match(/\d+/g);
    const currentWord = nums.indexOf(i);
    result.splice(i - 1, 0, splittedWords[currentWord]);
  }
  return result.join(' ');
};

console.log(order('is2 Thi1s T4est 3a')); // 'Thi1s is2 3a T4est'
console.log(order('4of Fo1r pe6ople g3ood th5e the2')); // 'Fo1r the2 g3ood 4of th5e pe6ople'
console.log(order('')); // ''
