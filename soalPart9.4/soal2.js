//DILARANG MENGGUNAKAN METHOD SORT, PELAJARI ALGORITMA SORTING YANG ADA DI GOOGLE
//saran sih pake bubblesort walau tidak efisien tapi bagus buat belajar sorting
// Dapatkan index str nya terlebih dahulu

function urutkanAbjad(str) {
  let letters = "abcdefghijklmnopqrstuvwxyz";
  let penampung = [];
  for (let i = 0; i < str.length; i++) { // Langkah pertama
    penampung.push(str[i]); // ['h', 'e', 'l', 'l', 'o']
  }
  
  for (let i = 0; i < letters.length; i++) { 
    for (let j = 0; j < (letters.length - i - 1); j++) { // j = 0; j < 26 - 0 - 1; j++
      if (penampung[j] > penampung[j+1]){ // penampung[0]=h > penampung[0+1]=e == true  
        let temp = penampung[j] // let temp = penampung[0]('h')
        penampung[j] = penampung[j+1] // penampung[0]('h') = penampung[0+1](e)
        penampung[j+1] = temp // penampung(e) = temp
      }
    }
  }
  return penampung
}

// TEST CASES
console.log(urutkanAbjad("hello")); // 'ehllo'
console.log(urutkanAbjad("truncate")); // 'acenrttu'
console.log(urutkanAbjad("developer")); // 'deeeloprv'
console.log(urutkanAbjad("software")); // 'aeforstw'
console.log(urutkanAbjad("aegis")); // 'aegis'
