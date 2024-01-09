// https://www.codewars.com/kata/5a7f58c00025e917f30000f1/train/javascript

// buat variabel penampung untuk menampung hasil
// buat variabel array untuk mencari nilai terbanyak
// looping setiap huruf
// masukkan setiap huruf yang dilooping ke variabel penampung
// validasi apakah index + 1 lebih kecil daripada index sekarang
// jika benar maka push variabel penampung ke array dan set penampung menjadi kosong

const longest = (str) => {
  const array = [];
  let container = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] > str[i + 1] && i !== str.length - 1) {
      container += str[i];
      array.push(container);
      container = '';
    } else {
      container += str[i];
    }
    if (i === str.length - 1) {
      array.push(container);
    }
  }

  array.sort((a, b) => b.length - a.length);
  return array[0];
};

console.log(longest('asdfaaaabbbbcttavvfffffdf')); // aaaabbbbctt
console.log(longest('nab')); // aaaabbbbctt
