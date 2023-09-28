// FPB = Bilangan positif terbesar yang dapat membagi habis dua bilangan atau lebih.
// Misalnya di sini kita punya angka 12 dan 16, maka 4 adalah bilangan bulat terbesar yang dapat membagi kedua bilangan tersebut.

function fpb(angka1, angka2) {
  while (angka2 !== 0) { // 16 !== 0 | 12 !== 0 | 4 !== 0 |
    const temp = angka2; // temp = 16 | temp = 12 | temp = 4 |
    angka2 = angka1 % angka2; // angka2 = 12 % 16 = 12 | angka2 = 16 % 12 = 4 | angka2 = 12 % 4 = 0 |
    angka1 = temp; // angka1 = 16 | angka1 = 12 | angka1 = 4 |
  }
  return angka1;
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1
