/**
  Hapus Simbol Rekursif
  Diberikan sebuah function hapusSimbol(str) yang menerima satu parameter berupa
  string. Function akan me-return string yang telah bersih dari berbagai simbol,
  hanya menyisakan a-z dan angka 0-9.
  RULES:
  - Wajib menggunakan metode rekursif
  - DILARANG menambahkan parameter baru
  - DILARANG membuat variable di luar function hapusSimbolRec
  - DILARANG mengubah tipe data parameter
  - proses looping (while, for, do-while, dan lain-lain) HANYA BOLEH ADA SATU
  - DILARANG menambahkan function di luar maupun di dalam function hapusSimbolRec
  - DILARANG menggunakan built in function .indexOf atau .include
  - DILARANG menggunakan REGEX
**/

function hapusSimbolRec(str) {
  let result = "";
  if (str.length > 0) {
    switch (str[0]) {
      case "a":
        result += str[0];
        break;
      case "b":
        result += str[0];
        break;
      case "c":
        result += str[0];
        break;
      case "d":
        result += str[0];
        break;
      case "e":
        result += str[0];
        break;
      case "f":
        result += str[0];
        break;
      case "g":
        result += str[0];
        break;
      case "h":
        result += str[0];
        break;
      case "i":
        result += str[0];
        break;
      case "j":
        result += str[0];
        break;
      case "k":
        result += str[0];
        break;
      case "l":
        result += str[0];
        break;
      case "m":
        result += str[0];
        break;
      case "n":
        result += str[0];
        break;
      case "o":
        result += str[0];
        break;
      case "p":
        result += str[0];
        break;
      case "q":
        result += str[0];
        break;
      case "r":
        result += str[0];
        break;
      case "s":
        result += str[0];
        break;
      case "t":
        result += str[0];
        break;
      case "u":
        result += str[0];
        break;
      case "v":
        result += str[0];
        break;
      case "w":
        result += str[0];
        break;
      case "x":
        result += str[0];
        break;
      case "y":
        result += str[0];
        break;
      case "z":
        result += str[0];
        break;
      case "0":
        result += str[0];
        break;
      case "1":
        result += str[0];
        break;
      case "2":
        result += str[0];
        break;
      case "3":
        result += str[0];
        break;
      case "4":
        result += str[0];
        break;
      case "5":
        result += str[0];
        break;
      case "6":
        result += str[0];
        break;
      case "7":
        result += str[0];
        break;
      case "8":
        result += str[0];
        break;
      case "9":
        result += str[0];
        break;
      default:
        break;
    }
    result += hapusSimbolRec(str.slice(1));
  }
  return result;
}

console.log(hapusSimbolRec("test4@aa")); //test4aa
console.log(hapusSimbolRec("devel0p3r s3j@@ati")); // devel0p3rs3jati
console.log(hapusSimbolRec("ma@#k!an~")); // makan
console.log(hapusSimbolRec("coding")); // coding
console.log(hapusSimbolRec("1+3-5*2=100")); // 1352100
