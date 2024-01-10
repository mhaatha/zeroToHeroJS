// https://www.codewars.com/kata/5877786688976801ad000100/train/javascript

// Split string menjadi bagian yang terpisah satu sama lain
// Buat variabel array untuk menampung object
// Looping setiap string yang telah terpisah
// Jika index dimodulus 2 === 0 maka masukkan index tersebut ke object name
// Jika index dimodulus 2 !== 0 maka masukkan index tersebut ke object id kemudian push object ke array dan set object menjadi kosong
// return array

const wordsToObject = (input) => {
  const splittedWord = input.split(' ');
  let result = '';

  for (let i = 0; i < splittedWord.length; i++) {
    if (i === 0) {
      result += '[';
    }
    if (i % 2 === 0) {
      result += `{name : '${splittedWord[i]}', `;
    } else if (i === splittedWord.length - 1) {
      result += `id : '${splittedWord[i]}'}]`;
    } else {
      result += `id : '${splittedWord[i]}'}, `;
    }
  }
  return result;
};

console.log(wordsToObject('red 1 yellow 2 black 3 white 4'));
