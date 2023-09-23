function pasanganTerbesar(num) {
  let toString = num.toString();
  let splitString = toString.split("");
  let biggest = 0;

  for (i = 0; i <= splitString.length - 2; i++) {
    let currentPair = parseInt(splitString[i] + splitString[i + 1]);
    if (currentPair > biggest) { 
        biggest = currentPair
    }
  }
  return biggest;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99