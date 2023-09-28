// Bilangan prima adalah bilangan yang hanya bisa dibagi oleh bilangan 1 dan bilangan itu sendiri.
// Contohnya 2, 3, 5, 7
// 5 hanya bisa dibagi oleh 1 dan 5. 7 hanya bisa dibagi oleh 1 dan 7, dst.

function angkaPrima(angka) {
  if (angka < 2) return false;

  for (i = 2; i <= Math.sqrt(angka); i++) {
    if (angka % i === 0) {
      return false;
    }
  }

  return true;
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false
console.log(angkaPrima(113));
