//4. counter kelipatan
// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.

/* ==============================================ALGORITMA=====================================================
    - Buat 3 looping 1-100 dengan pertambahan counter 2, 5, dan 9. Periksa setiap angka:
    - Apabila bukan kelipatan yang ditentukan, tidak perlu menuliskan apa-apa.
    - Apabila angka counter adalah "kelipatan 3 dengan pertambahan 2" "kelipatan 6 dengan pertambahan 5" "kelipatan 10 dengan pertambahan 9" tuliskan:
    - "3 kelipatan 3" dst.
===============================================================================================================*/

console.log ('=============================Ini adalah looping dengan pertambahan 2=============================')
for (let i = 1; i < 100; i += 2) {
    if (i % 3 === 0) {
        console.log(i + ' ' + 'adalah kelipatan 3')
    } else {
        console.log(i)
    }
}

console.log ('=============================Ini adalah looping dengan pertambahan 5=============================')
for (let j = 0; j < 100; j += 5) {
    if (j % 6 === 0) {
        console.log(`${j} adalah kelipatan 6`)
    } else {
        console.log(j)
    }
}

console.log ('=============================Ini adalah looping dengan pertambahan 9=============================')
for (let k = 0; k < 100; k += 9) {
    if (k % 10 === 0) {
        console.log (`${k} adalah kelipatan 10`)
    } else {
        console.log (k)
    }
}