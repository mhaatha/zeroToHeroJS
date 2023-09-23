// ==========================================ALGORITMA==========================================
// - Terdapat function yang berfungsi untuk mereturn angka selanjutnya yang termasuk angka palindrome.
// - Jika angka 27 maka function harus mereturn angka 33.
// - Jika angka awal palindrome, maka function harus mencari angka selanjutnya yang palindrome.

function angkaPalindrome(num) {
  while (true) {
    num++;
    let toString = num.toString();
    let splitString = toString.split("");
    let reversedString = splitString.reverse();
    let joinString = reversedString.join("");
    let number = parseInt(joinString);
    if (num == number) {
      return num;
    }
  }
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
console.log(angkaPalindrome(1231));
