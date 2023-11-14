/*

Diberikan sebuah function palindromeRecursive(sentenc) yang menerima satu parameter.
Function tersebut akan mengembalikan nilai true jika kata merupakan palindrome, dan false jika bukan.
Kata palindrome adalah sebuah kata yang jika dibalik, tetap sama.
Contoh, 'katak' dibalik tetaplah 'katak'.

RULES
=====
- Wajib menggunakan metode rekursif
- Dilarang menambahkan parameter baru
- Dilarang membuat variable di luar function palindromeRecursive
- Dilarang mengubah tipe data parameter

*/

function palindromeRecursive(sentence) {
  //code here - saran bikin fungsi rekursif didalam sini
  // for (let i = 0; i < sentence.length; i++) {
  //   if (sentence[i] === sentence[sentence.length - i - 1]) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
  function isPalindrome(start, end) {
    if (start === end) {
      return true;
    }

    if (sentence[start] === sentence[end]) {
      return isPalindrome(start + 1, end - 1)
    } else {
      return false
    }
  }
  return isPalindrome(0, sentence.length - 1)
  //lalu bandingkan dengan sentence
}

// TEST CASES
console.log(palindromeRecursive("katak")); // true
console.log(palindromeRecursive("blanket")); // false
console.log(palindromeRecursive("civic")); // true
console.log(palindromeRecursive("kasur rusak")); // true
console.log(palindromeRecursive("mister")); // false