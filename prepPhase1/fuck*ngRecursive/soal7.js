/*
  PARSE NUMBER
  Parse Number adalah sebuah fungsi untuk memecah atau menguraikan suatu angka. Fungsi akan
  menerima parameter berupa angka dan keluaran berupa string uraian angka.

  EXAMPLE
  INPUT: 4321
  OUTPUT: 4000+300+20+1

  RULES:
  1. Wajib menggunakan rekursif!
  2. Tidak boleh menambahkan parameter dan function baru
*/

function parseNumber(equation) {
  let result;
  let digitKiri = Math.pow(10, Math.floor(Math.log10(equation)));
  if (equation < 9) {
    return equation;
  } else {
    if (equation >= 1000) {
      result = Math.floor(equation / digitKiri) * digitKiri;
    } else if (equation >= 100) {
      result = Math.floor(equation / digitKiri) * digitKiri;
    } else if (equation >= 10) {
      result = Math.floor(equation / digitKiri) * digitKiri;
    }
  }
  if (equation - result !== 0) {
    return `${result} + ${parseNumber(equation - result)}`;
  } else {
    return `${result}`;
  }
}

console.log(parseNumber(3333)); // 3000+300+30+3  // 3000 + 300 + 30 + 3
console.log(parseNumber(90)); // 90
console.log(parseNumber(2333)); // 2000+300+30+3
