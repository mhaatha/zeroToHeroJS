// 3. Breaking Sentence (Again) using Substring
// Problem
// Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil potongan dari tiap kata!

let word3 = 'wow JavaScript is so cool';
let firstWord3 = word3.substring(0, 3);
let secondWord3 = word3.substring(4, 14);
let thirdWord3 = word3.substring(15, 17);
let fourthWord3 = word3.substring(18, 20);
let fifthWord3 = word3.substring(21);

console.log('================================================');
console.log('First Word: ' + firstWord3);
console.log('Second Word: ' + secondWord3);
console.log('Third Word: ' + thirdWord3);
console.log('Fourth Word: ' + fourthWord3);
console.log('Fifth Word: ' + fifthWord3);

// ---------------------------------------
console.log('================================================');
console.log(`Ini adalah kalimatnya: ${firstWord3} ${secondWord3} ${thirdWord3} ${fourthWord3} ${fifthWord3}`);
console.log('================================================');
// ---------------------------------------