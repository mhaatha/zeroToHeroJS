// const SIZE = 5
// let value = 1

// for (let i = 1; i <= SIZE; i++) {
//     let s = ''
//     for (j = 1; j <= i; j++) {
//         s += value + ' '
//         value++
//     } console.log(s)
// } 

// for (let i = 0; i < 5; i++) {
//     let bintang = '';
//     for (let j = 0; j < 5; j++) {
//       if (j < 5 - i - 1) {
//         bintang += ' ';
//       } else {
//         bintang += '*';
//       }
//     } console.log(bintang);
// }

// let jumlah = 5;
// for (let i = 0; i < jumlah; i++) {
//   let bintang = '';
//   for (let j = 0; j < jumlah; j++) {
//     if (j < jumlah - i - 1) {
//       bintang += ' ';
//     } else {
//       bintang += '*';
//     }
//   }
//   console.log(bintang);
// }





let nilai = 5;

for (a = 0; a < nilai; a++) {
    let sp = '' 
    for (b = 0; b < nilai; b++) {
        if (b < nilai - a - 1) {
            sp += ' '
        } else {
            sp += '*'
        }
    } console.log(sp)
}

// *****
//  ****
//   ***
//    **
//     *
let jumlah = 0;

for (i = 5; i > jumlah; i--) {
    let s = ''
    for (j = 5; j > jumlah; j--) {
        if (j > jumlah + i) {      // J1. 0 <= 5 = * 1 <= 4 = * 2 <= 4 = * 3 <= 4 = * 4 <= 4 = * 
            s += ' '               // J2. 0 <= 3 = '' 1 <= 3 = * 2 <= 3 = * 3 <= 3 = * 4 <= 3 = *
        } else {                   // J3. 0 <= 2 = '' 1 <= 2 = '' 2 <= 2 = * 3 <= 2 = * 4 <= 2 = *
            s += '*'               // J4. 0 <= 1 = '' 1 <= 1 = '' 2 <= 1 = '' 3 <= 1 = * 4 <= 1 = *
        }                          // J5. 0 <= 0 = '' 1 <= 0 = '' 2 <= 0 = '' 3 <= 0 = '' 4 <= 0 = *
    } console.log (s)
}

// let jumlah1 = 5;
// for (i2 = 0; i2 < jumlah1; i2++) {
//     let s2 = ''
//     for (j2 = 0; j2 < jumlah; j2++) {
//         if (j2 < jumlah1 - i2 - 1) {
//             s2 += '*'
//         } else {
//             s2 += ' '
//         }
//     } console.log(s2)
// }


