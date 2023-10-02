/*
Diberikan sebuah function digitPerkalianMinimum(angka) yang menerima satu parameter angka. Function akan mengembalikan jumlah digit minimal dari angka yang merupakan faktor angka parameter tersebut, Contoh, jika angka adalah 24, maka faktornya adalah 1 * 24, 2 * 12, 3 * 8, dan 4 * 6. Dari antara faktor tersebut, yang digit nya paling sedikit adalah 3 * 8 atau 4 * 6, sehingga function akan me-return 2.

1 * 24 = 3 digit (124)
2 * 12 = 3 digit (212)
3 * 8 = 2 digit (38)
4 * 6 = 2 digit (46)



karena dibawah ini 2 digit dan terkecil
3 * 8 = 2 digit (38)
4 * 6 = 2 digit (46)

ya jadikan dia minimum

misal faktornya angka 1 hanyalah
1 * 1 = 2 digit (11)

Return 2
*/
/*
  ========================ALGORITMA========================
  - Jika angka hanya 1 digit otomatis hanya ada 2 digit pembagi, maka kita buat terlebih dahulu if condition nya
  - Pisahkan atau tampilkan dahulu faktor perkalian dari parameter yang menerima argumen
  - Gabungkan pisahan tadi agar menjadi faktor perkalian dari parameter yang menerima argumen angka
  - Cari index yang paling sedikit diantara pisahan yang telah digabungkan tadi
*/

function digitPerkalianMinimum(angka) {
  for (i = 1; i <= 10; i++) { // Langkah pertama
    if (i === angka) {
      return 2
    }
  }

  let gabung = []; // Langkah kedua
  let jumlah = [];
  for (let i = 1; i <= angka; i++) { 
    if (angka % i === 0) { 
      jumlah.push(i); // [1, 2, 3, 4, 6, 8, 12, 24]
    }
  }

  for (let i = 0; i < jumlah.length; i++) { // Langkah ketiga
    for (let j = i + 1; j < jumlah.length; j++) { // j = i(0) + 1; j < jumlah.length (8); j++
      if (jumlah[i] * jumlah[j] === angka) { // Misal looping sudah memasuki looping kedua. jumlah[i](2) * jumlah[j](12) === angka === 212
        gabung.push(`${jumlah[i]}${jumlah[j]}`); // [ '124', '212', '38', '46' ]
      }
    }
  }

  // Langkah keempat
  let panjangTerkecil = gabung[0].length; // panjangTerkecil = gabung[0].length = 124.length = 3

  for (let i = 1; i < gabung.length; i++) { // i = 1; 1 < 4; i++
    const panjangSaatIni = gabung[i].length; // panjangSaatIni = gabung[0].length = 3; gabung[1].length = 3; gabung[2].length = 2; gabung[3].length = 2

    if (panjangSaatIni < panjangTerkecil) { // 3 < 3 = false; 3 < 3 = false; 2 < 3 = true; 2 < 3 = true 
      panjangTerkecil = panjangSaatIni; // 3 = 2
    }
  }
  return panjangTerkecil
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
