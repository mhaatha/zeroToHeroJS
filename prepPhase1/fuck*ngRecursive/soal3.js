/**
  Vowels Counter Recursive
  Diberikan sebuah function consonantCounterRecursive(sentences) yang 
  menerima satu parameter berupa
  string. Function akan me-return jumlah huruf konsonan yang terdapat 
  di dalam parameter inputan.
  Jika ada karakter selain abjad/alphabet maka tidak akan dihitung.
- Wajib menggunakan metode rekursif
  - DILARANG menambahkan parameter baru
  - DILARANG membuat variable di luar function vowelsCounterRecursive
  - DILARANG mengubah tipe data parameter
  - proses looping (while, for, do-while, dan lain-lain) HANYA BOLEH ADA SATU
  - DILARANG menambahkan function di luar maupun di dalam function vowelsCounterRecursive
  - DILARANG menggunakan built in function .indexOf atau .include
  - DILARANG menggunakan REGEX
*/

function consonantCounterRecursive(sentences) {
  let counter = 0;
  if (sentences.length > 0) {
    sentences = sentences.toLowerCase();
    switch (sentences[0]) {
      case "b":
      case "c":
      case "d":
      case "e":
      case "f":
      case "g":
      case "h":
      case "j":
      case "k":
      case "l":
      case "m":
      case "n":
      case "p":
      case "q":
      case "r":
      case "s":
      case "t":
      case "v":
      case "w":
      case "x":
      case "y":
      case "z":
        counter++;
        break;
      default:
        break;
    }
    counter += consonantCounterRecursive(sentences.slice(1));
  }
  return counter
}

console.log(consonantCounterRecursive("alDi Suka MakAn baksO")); //10
console.log(consonantCounterRecursive("AziZy")); // 3
console.log(consonantCounterRecursive("awt6an")); // 3
