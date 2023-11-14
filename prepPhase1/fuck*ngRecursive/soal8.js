/* 
Budi ingin menyusun batu bata dengan ukuran yang sama sampai membentuk piramid 2 dimensi
Jika piramid bertingkat 1, Budi hanya memerlukan 1 batu bata
  B
Jika piramid bertingkat 2, Budi memerlukan 3 batu bata
  B
 B B
Jika piramid bertingkat 3, Budi memerlukan 6 batu bata
  B
 B B
B B B 
Jika piramid bertingkat 4, Budi memerlukan 10 batu bata
   B
  B B
 B B B 
B B B B
​
Di setiap tingkat bertambah 1 batu bata dibanding tingkatan diatasnya
​
Buatlah function piramid (n) yang memberitahu berapa jumlah batu bata yang diperlukan untuk membuat piramid bertingkat n.
​
[RULES]
  1. Wajib menggunakan RECURSIVE.
  2. Dilarang membuat function tambahan selain function piramid.
  3. Dilarang menambah parameter function.
*/

function piramid(n) {
  if (n < 1) {
    return n;
  }
  return (n += piramid(n - 1));
  // piramid(5)
  // n = 5 + piramid(4) = 9
  // n = 9 + piramid(3) = 12
  // n = 12 + piramid(2) = 14
  // n = 14 + piramid(1) = 15
  // n = 15 + piramid(0) = 15 + 0 = 15
  // n = 5 + 10 = 15
  // n = 4 + 6 = 10
  // n = 3 + 3 = 6
  // n = 2 + 1 = 3
  // n = 1 + 0 = 1
}

// console.log(piramid()) // 0
console.log(piramid(0)); // 0
console.log(piramid(1)); // 1
console.log(piramid(2)); // 3
console.log(piramid(3)); // 6
console.log(piramid(4)); // 10
console.log(piramid(5)); // 15
console.log(piramid(6)); // 21
console.log(piramid(100)); // 5050
console.log(piramid(888)); // 394716
