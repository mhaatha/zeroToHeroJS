/*       =================ALGORITMA=================
  - Buat 3 variabel yang menampilkan output yang mereturn 3 array
  - Variabel pertama berisi angka-angka genap
  - Variabel kedua berisi angka-angka ganjil
  - Variabel ketiga berisi angka-angka kelipatan 3
*/
function mengelompokkanAngka(arr) {
  let penampungPertama = [];
  let penampungKedua = [];
  let penampungKetiga = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0 && arr[i] % 3 !== 0) {
      penampungPertama.push(arr[i]);
    }
  }
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 1 && arr[i] % 3 !== 0) {
      penampungKedua.push(arr[i]);
    }
  }
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 3 == 0) {
      penampungKetiga.push(arr[i]);
    }
  }
  return [penampungPertama, penampungKedua, penampungKetiga];
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]
console.log(mengelompokkanAngka([1, 23, 34, 52, 123, 12, 99, 127, 3]));
