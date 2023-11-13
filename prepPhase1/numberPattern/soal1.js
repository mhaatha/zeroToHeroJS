/*
================
MISSING NUMBER
================
description: Sebuah fungsi untuk mencari angka yang hilang berdasarkan pola dari board atau
papan yang tersedia. Fungsi akan mengembalikan nilai sebuah array yang berisi
angka-angka yang hilang

examples:
INPUT = 
[
  [ 7 ,' ', 5 ],
  [' ', 8 , 9 ]
  [ 1 ,' ',' '] 
]

ASUMSI PADA PAPAN SUDAH TERDAPAT RANGE TERBESAR DAN TERKECIL YAITU 1 DAN 9 SEHINGGA
OUTPUT:
[ 2, 3, 4, 6]

PADA MASING-MASING TEST CASE SUDAH TERDAPAT RANGE TERBESAR DAN TERKECIL
*/

function missingNum(arr) {
  const angkaFilter = arr.flat().filter((item) => typeof item === "number"); // MENGGABUNGKAN ARRAY YANG TERPISAH MENJADI 1 ARRAY LALU FILTER HANYA NUMBER SAJA
  const biggest = Math.max(...angkaFilter); // MENCARI NILAI TERTINGGI 
  const smallest = Math.min(...angkaFilter); // MENCARI NILAI TERENDAH
  const numbers = []; // SEBAGAI PENAMPUNG ANGKA-ANGKA YANG DIAPIT OLEH NILAI TERTINGGI DAN NILAI TERENDAH
  const result = [] // SEBAGAI PENAMPUNG HASIL
  for (let i = smallest + 1; i < biggest; i++) { // PERULANGAN UNTUK MENCARI NILAI-NILAI YANG DIAPIT OLEH HIGHEST DAN SMALLEST
    numbers.push(i);
  }
  for (let i = 0; i < numbers.length; i++) { // PERULANGAN UNTUK MENCARI APAKAH ANGKA-ANGKA YANG DIAPIT OLEH HIGHEST DAN SMALLEST TERDAPAT PADA VARIABEL ANGKAFILTER
    if (!angkaFilter.includes(numbers[i])) {
      result.push(numbers[i])
    }
  }
  return result
}

console.log(
  missingNum([
    [3, " ", 5],
    [1, " ", 7],
    [9, " ", " "],
  ])
); // [ 2, 4, 6, 8 ]
console.log(
  missingNum([
    [2, " "],
    [" ", 5],
  ])
); // [ 3, 4 ]
console.log(
  missingNum([
    [11, " ", 13],
    [17, " ", 19],
    [" ", 16, " "],
  ])
); // [ 12, 14, 15, 18 ]
console.log(
  missingNum([
    [3, " ", 5, 15],
    [1, " ", 7, 13],
    [9, " ", " ", 12],
    [" ", 16, " ", " "],
  ])
); // [ 2, 4, 6, 8, 10, 11, 14 ]
console.log(missingNum([])); // []
