/*
Diberikan sebuah function palindrome(kata) yang menerima satu parameter. Function tersebut akan mengembalikan nilai true jika kata merupakan palindrome, dan false jika bukan. Kata palindrome adalah sebuah kata yang jika dibalik, tetap sama. Contoh, 'katak' dibalik tetaplah 'katak'.
*/

function palindrome(kata) {
  let dibalik = ""; // katak.length = 5 (0,1,2,3,4)
  for (i = kata.length - 1; i >= 0; i--) { // i = kata.length misal katak.length = 5 - 1 = 4; i >= 0; i--
    dibalik += kata[i]; // "" + kata[i] = kata[4] "" + kata[i] = kata[3] dst. 
  }
  if (dibalik == kata) {
    return true;
  } else {
    return false;
  }
}

// TEST CASES
console.log(palindrome("katak")); // true
console.log(palindrome("blanket")); // false
console.log(palindrome("civic")); // true
console.log(palindrome("kasur rusak")); // true
console.log(palindrome("mister")); // false
