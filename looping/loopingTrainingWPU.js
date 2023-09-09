// let i = 0;
// while (i < 5) {
//     i++
//     console.log(i)
// }

// 0 kurang dari 5 maka tampilkan 0 lalu tambah 1
// 1 kurang dari 5 maka tampilkan 1 lalu tambah 1
// 2 kurang dari 5 maka tampilkan 2 lalu tambah 1
// 3 kurang dari 5 maka tampilkan 3 lalu tambah 1
// 4 kurang dari 5 maka tampilkan 4 lalu tambah 1
// 5 tidak kurang dari 5 maka berhenti

// 0 kurang dari 5 lalu tambah 1 dan tampilkan 1
// 1 kurang dari 5 lalu tambah 1 dan tampilkan 2
// 2 kurang dari 5 lalu tambah 1 dan tampilkan 3
// 3 kurang dari 5 lalu tambah 1 dan tampilkan 4
// 4 kurang dari 5 lalu tambah 1 dan tampilkan 5
// 5 tidak kurang dari 5 maka berhenti


// for (k = 0; k < 5; k++) {
//     console.log(k)
// }

// let jumlahAngkot = 10
// let noAngkot = 1
// while (noAngkot <= jumlahAngkot) {
//     console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.')
//     noAngkot++
// }

// let jumlahAngkot = 10
// let angkotBeroperasi = 7
// let noAngkot = 1

// while (noAngkot <= angkotBeroperasi) {
//     console.log("Angkot No. " + noAngkot + " beroperasi dengan baik.")
//     noAngkot++
// } for (noAngkot = noAngkot; noAngkot <= jumlahAngkot; noAngkot++) {
//     console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi.")
// } 

// let jumlahAngkot = 10
// let angkotBeroperasi = 8

// for (let noAngkot = 1; noAngkot <= jumlahAngkot; noAngkot++){
//     if (noAngkot < angkotBeroperasi - 1) {
//         if (noAngkot === 5) { 
//             console.log ("Angkot No. " + noAngkot + " sedang lembur.")
//         } else {
//            console.log ("Angkot No. " + noAngkot + " sedang beroperasi.")
//         }
//     }else if (noAngkot === 8 || noAngkot === 10) {
//        console.log ("Angkot No. " + noAngkot + " sedang lembur.")
//     } else {
//         console.log ("Angkot No. " + noAngkot + " sedang tidak beroperasi.")
//     }
// }

// let jumlahAngkot = 10
// let angkotBeroperasi = 8

// for (let noAngkot = 1; noAngkot <= jumlahAngkot; noAngkot++){
//     if (noAngkot < angkotBeroperasi - 1 && noAngkot !== 5) {
//         console.log ("Angkot No. " + noAngkot + " sedang beroperasi.")
//     } else if (noAngkot === 8 || noAngkot === 10 || noAngkot === 5) {
//        console.log ("Angkot No. " + noAngkot + " sedang lembur.")
//     } else {
//         console.log ("Angkot No. " + noAngkot + " sedang tidak beroperasi.")
//     }
// }

let s = ''

for (i = 5; i >= 0; i--) {
    for (j = 0; j <= i; j++){
        s += '*'
    }
    s += '\n'
}

for (k = 0; k <= 5; k++) {
    for (l = 0; l <= k; l++) {
        s += '*'
    } s += '\n'
}
console.log (s)



// for (i = 5; i > 0; i--) {
//     for (j = 0; j < i; j++) {
//         s += '*'
//     } s += '\n'
// } 
//console.log(s)
