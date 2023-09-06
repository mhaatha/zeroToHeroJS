// 3. Angka Ganjil dan Genap
// Hint: kamu akan menggunakan kondisional juga di kasus ini.

// Problem
// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:

// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL

/* ==============================================ALGORITMA=====================================================
    - Conditional Looping
    - Membuat looping 1-100 dengan pertambahan 1
    - Di dalam looping, periksa setiap angka GENAP dan GANJIL
===============================================================================================================*/

console.log ('Perulangan For')
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(`${i} adalah bilangan GENAP`)
    } else if (i % 2 !== 0) {
        console.log(`${i} adalah bilangan GANJIL`)
    }
}

console.log('')
console.log ('Perulangan While')
j = 101
while (j > 1) {
    j--
    if (j % 2 === 0) {
        console.log(`${j} adalah bilangan GENAP`)
    } else if (j % 2 !== 0) {
        console.log(`${j} adalah bilangan GANJIL`)
    }
}