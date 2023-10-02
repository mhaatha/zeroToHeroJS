//TIPS: gunakan method toUpperCase() dan toLowerCase()
function tukarBesarKecil(kalimat) {
  // let letters = "abcdefghijklmnopqrstuvwxyz";
  // let toUpper = letters.toUpperCase();
  // let toLower = letters.toLowerCase();
  let container = "";

  for (let i = 0; i < kalimat.length; i++) {
    let character = kalimat[i];
    if (character >= "A" && character <= "Z") {
      container += character.toLowerCase();
    } else if (character >= 'a' && character <= 'z') {
      container += character.toUpperCase();
    } else {
      container += character
    }
  }
  return container

  // for (let i = 0; i < kalimat.length; i++) {
  //   for (j = 0; j < letters.length; j++) {
  //     if (kalimat[i] === toUpper[j]) {
  //       container += kalimat[i].toLowerCase();
  //     } else if (kalimat[i] === toLower[j]) {
  //       container += kalimat[i].toUpperCase();
  //     }
  //   }
  // }
  // return container;
}

// TEST CASES
console.log(tukarBesarKecil("Hello World")); // "hELLO wORLD"
console.log(tukarBesarKecil("I aM aLAY")); // "i Am Alay"
console.log(tukarBesarKecil("My Name is Bond!!")); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil("IT sHOULD bE me")); // "it Should Be ME"
console.log(tukarBesarKecil("001-A-3-5TrdYW")); // "001-a-3-5tRDyw"
