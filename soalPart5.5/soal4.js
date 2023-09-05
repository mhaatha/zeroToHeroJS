// 4. Breaking Sentence (yet Again) and Count Each Length
// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!

let word4 = 'wow JavaScript is so cool';

let firstWord4 = word4.substring(0, 3);
let firstWordLength = firstWord4.length;

let secondWord4 = word4.substring(4, 14);
let secondWordLength = secondWord4.length;

let thirdWord4 = word4.substring(15, 17);
let thirdWordLength = thirdWord4.length;

let fourthWord4 = word4.substring(18, 20);
let fourthWordLength = fourthWord4.length;

let fifthWord4 = word4.substring (21);
let fifthWordLength = fifthWord4.length;

let totalLength = firstWordLength + secondWordLength + thirdWordLength + fourthWordLength + fifthWordLength

console.log('=============================================================================');
console.log(`First Word: "${firstWord4}" with length: ${firstWordLength} alphabets.`);
console.log(`Second Word: "${secondWord4}" with length: ${secondWordLength} alphabets.`);
console.log(`Third Word: "${thirdWord4}" with length: ${thirdWordLength} alphabets.`);
console.log(`Fourth Word: "${fourthWord4}" with length: ${fourthWordLength} alphabets.`);
console.log(`Fifth Word: "${fifthWord4}" with length: ${fifthWordLength} alphabets.`);

console.log('=============================================================================');
console.log(`This is the words: ${firstWord4} ${secondWord4} ${thirdWord4} ${fourthWord4} ${fifthWord4} with total length: ${totalLength} alphabets.`)
console.log('=============================================================================');