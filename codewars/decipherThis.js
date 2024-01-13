// https://www.codewars.com/kata/581e014b55f2c52bb00000f8/train/javascript

// For each word:
// huruf kedua dan terakhir ditukar (Hello menjadi Holle)
// huruf pertama diganti oleh character code (H menjadi 72)
// tidak memakai spesial karakter, hanya huruf dan spasi
// kata dipisah oleh spasi
// tidak ada spasi di depan dan di belakang

// Solusi:
// pisahkan kata dan angka
// buat variabel regex untuk menampung angka yang telah dipisahkan
// split kata yang telah diambil angka nya, tampung ke dalam variabel baru
// looping kata yang telah di split
// tukar kata pertama dan terakhir, lalu masukkan regex index ke i ke splitted word paling kiri
// push ke dalam variabel result
// join variabel result dan returns

const decipherThis = (encrypted) => {
  // Buat regex yang mengambil angka dan memisahkan angka dari kata
  let nums = encrypted.match(/\d+/g);
  let splittedWord = encrypted.replace(/\d/g, '').split(' ');

  // Looping splittedWord
  for (let i = 0; i < splittedWord.length; i++) {
    const firstWord = String.fromCharCode(nums[i]);
    const secondWord = splittedWord[i][0];
    const lastWord = splittedWord[i][splittedWord[i].length - 1];

    if (splittedWord[i].length > 1) {
      splittedWord[i] = firstWord + lastWord + splittedWord[i].substring(1, splittedWord[i].length - 1) + secondWord;
    } else {
      splittedWord[i] = firstWord + splittedWord[i].substring(0);
    }
    
  }
  return splittedWord.join(' ');
};

console.log(decipherThis('72olle 103doo 100ya')); // 'Hello good day'
console.log(decipherThis('82yade 115te 103o')); // 'Ready set go'
