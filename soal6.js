// 4. Breaking Sentence (yet Again) and Count Each Length
// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!

let word4 = 'wow JavaScript is so cool'
console.log('===========================================================================');
let exampleFirstWord4 = word4.substring(0,3);
let lengthFirstWord4 = exampleFirstWord4.length;

let secondWord4 = word4.substring(4, 14);
let lengthSecondWord4 = secondWord4.length;

let thirdWord4 = word4.substring(15, 17);
let lengthThirdWord4 = thirdWord4.length;

let fourthWord4 = word4.substring(18, 20);
let lengthFourthWord4 = fourthWord4.length;

let fifthWord4 = word4.substring(21);
let lengthFifthWord4 = fifthWord4.length;

let totalLength = lengthFirstWord4 + lengthSecondWord4 + lengthThirdWord4 + lengthFourthWord4 + lengthFifthWord4 

console.log (`First Word: "${exampleFirstWord4}" with length: ${lengthFirstWord4} alphabets`);
console.log (`Second Word: "${secondWord4}" with length: ${lengthSecondWord4} alphabets`);
console.log (`Third Word: "${thirdWord4}" with length: ${lengthThirdWord4} alphabets`);
console.log (`Fourth Word: "${fourthWord4}" with length: ${lengthFourthWord4} alphabets`);
console.log (`Fifth Word: "${fifthWord4}" with length: ${lengthFifthWord4} alphabets`);

console.log('===========================================================================');
console.log (`Ini adalah kalimatnya: ${exampleFirstWord4} ${secondWord4} ${thirdWord4} ${fourthWord4} ${fifthWord4} with length:  ${totalLength} alphabets`);
console.log('===========================================================================');