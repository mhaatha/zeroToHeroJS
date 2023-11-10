/*
=====================
DOUBLE REVERSE ARRAY
=====================

[INSTRUCTION]
Terdapat function doubleReverse yang menerima parameter berupa array of string, 
function ini akan memutar elemen array, string yang berada di dalam elemen array juga akan dibalik atau diputar jika panjang string GENAP

[EXAMPLE]
input: ['rabu', 'cinta', 'benci', 'masuk', 'nikmat']
proses: memutar isi array, dan memutar elemen array yang panjang katanya genap
output: [ 'tamkin', 'masuk', 'benci', 'cinta', 'ubar' ]

[RULES]
- Function bawaan javascript yang boleh digunakan hanyalah .push dan .length
- DILARANG menggunakan .reverse()
*/

function doubleReverse(arr) {
  if (arr.length === 0) {
    return `Invalid input parameter`;
  }
  let tempResult = [];
  let finalResult = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    tempResult.push(arr[i]);
  }

  // tempResult = [ 'nikmat', 'masuk', 'benci', 'cinta', 'rabu' ]
  for (let i = 0; i < tempResult.length; i++) {
    if (tempResult[i].length % 2 === 0) {
      let reverseWord = "";
      for (let j = tempResult[i].length - 1; j >= 0; j--) {
        reverseWord += tempResult[i][j]
      }
      finalResult.push(reverseWord)
    } else {
      finalResult.push(tempResult[i]);
    }
  }
  return finalResult;
}

console.log(doubleReverse(["rabu", "cinta", "benci", "masuk", "nikmat"]));
// [ 'tamkin', 'masuk', 'benci', 'cinta', 'ubar' ]
console.log(doubleReverse(["aku", "sayang", "kamu"]));
// [ 'umak', 'gnayas', 'aku' ]
console.log(doubleReverse(["pelakor", "perusak", "rumah", "tangga"]));
//[ 'anggnat', 'rumah', 'perusak', 'pelakor' ]
console.log(doubleReverse([]));
// invalid input parameter
