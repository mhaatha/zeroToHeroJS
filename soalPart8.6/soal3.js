// Deret aritmatika adalah barisan yang memiliki pola tertentu
// Angka kedua dikurang angka 1, hasilnya akan menjadi patokan apakah deret tersebut aritmatika atau bukan.
// Kurang angka selanjutnya dengan patokan tersebut, jika angka sama dengan angka sebelumnya, maka benar.
// Jika tidak maka salah

function tentukanDeretAritmatika(arr) {
  let patokan = [];
  for (let i = 1; i < arr.length - 1; i++) {
    patokan = arr[1] - arr[0];
    if (arr[i + 1] - arr[i] !== patokan) {
      return false
    }
  }
  return true
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
console.log(tentukanDeretAritmatika([4, 8, 12, 16, 20, 24])); // true
