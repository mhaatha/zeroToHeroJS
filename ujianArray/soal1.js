/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
// Kita harus mengidentifikasi letak 'x' terlebih dahulu.
// Jika sudah ditemukan, maka index x dikurang index o.

function targetTerdekat(arr) {
  let penampung = [];
  let posisiO = -1;
  for (i = 0; i < arr.length; i++) {
    if ("x" == arr[0]) {
      return 1;
    } else if (arr[i] == "x") {
      penampung = penampung + [i];
      break;
    }
  }
  for (j = 0; j < arr.length; j++) {
    if (!arr.includes("x")) {
      return 0;
    } else if (arr[j] == "o") {
      const jarak = Math.abs(j - penampung)
      if (jarak < penampung){
        penampung = jarak
      }
    }
  }
  return parseInt(penampung);
}

// TEST CASES
console.log(targetTerdekat([" ", " ", "o", " ", " ", "x", " ", "x"])); // 3
console.log(targetTerdekat(["o", " ", " ", " ", "x", "x", "x"])); // 4
console.log(targetTerdekat(["x", " ", " ", " ", "x", "x", "o", " "])); // 1
console.log(targetTerdekat([" ", " ", "o", " "])); // 0
console.log(targetTerdekat([" ", "o", " ", "x", "x", " ", " ", "x"])); // 2
console.log(targetTerdekat(["o", "o", " ", " ", "x"])); // 3
console.log(targetTerdekat(["o", "o", " ", " ", " "])); // 0