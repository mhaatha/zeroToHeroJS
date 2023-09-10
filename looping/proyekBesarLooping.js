const JUMLAH1 = 5;

for (i = 0; i < JUMLAH1; i++) { // 0 < 5: true
    let string = '' // Agar variabel ini masuk ke looping dan sesuai dengan deklasi awal
    for (j = 0; j < JUMLAH1; j++) { // 0 < 5: true
        if (j <= JUMLAH1 - i - 1) { // 0 <= 5 - 0 - 1 (0 <= 4: true)
            string += '*' // if true maka *
        } else {
            string += ' ' // if false maka ' '
        }
    } console.log (string) 
}

const JUMLAH2 = 0;

for (i = 5; i >= JUMLAH2; i--) { // 5 >= 0: true
    let string = '' // Agar variabel ini masuk ke looping dan sesuai dengan deklasi awal
    for (j = 5; j > JUMLAH2; j--) { // 5 >= 0: true
        if (j >= JUMLAH2 + i + 1) { // 5 >= 0 + 5 + 1 (5 >= 6: false = '*') -> looping ke-2 5 >= 0 + 4 + 1 (5 >= 5: true = ' ') 
            string += ' '
        } else { 
            string += '*' 
        }
    } console.log (string)
}
console.log ('------------------------')


const JUMLAH3 = 5;

for (i = 0; i < JUMLAH3; i++) { // 0 < 5: true
    let string = '' // Agar variabel ini masuk ke looping dan sesuai dengan deklasi awal
    for (j = 0; j < JUMLAH3; j++) { // 0 < 5: true
        if (j <= JUMLAH3 - i - 1) { // 0 <= 5 - 0 - 1 (0 <= 4: true)
            string += '*' // if true maka *
        } else {
            string += ' ' // if false maka ' '
        }
    } console.log (string) 
}

const JUMLAH4 = 5;
let string = ''

for (let i = 0; i < JUMLAH4; i++) { // 0 < 5: true
    for (let j = 0; j <= i; j++) { // 0 <= 0: true
        string += '*' // Tambahkan * setiap kali true
    } string += '\n' // Tambahkan spasi setiap selesai looping
} console.log (string)
console.log ('------------------------')

let bintang = '*';

for (let i = 0; i < 4; i++) { // 0 < 4: true
    console.log(bintang) // Bintang *
    bintang += bintang[i] // bintang = bintang + bintang [i] gatau ah bingung
}

const JUMLAH5 = 5;

for (let i = 0; i < JUMLAH5; i++) { // 0 <= 5: true
    let string = '' // Agar variabel ini masuk ke dalam looping dan mengulang nilainya sesuai dengan deklarasi awal
    for (let j = 0; j < JUMLAH5; j++) { // 0 <= 5: true
        if (j <= JUMLAH5 - i - 1) { // 0 < 5 + 0 + 1 (0 < 6: true = '*')
            string += '*'
        } else {
            string += ' '
        }
    } console.log (string)
}
console.log ('------------------------')

const SEGITIGA = 5;
let SEGITIGA2 = 6
let SEGITIGA3 = 3

for (let i = 1; i <= SEGITIGA; i++) { // 1 <= 5: true
    let s = ''
    for (let j = 1; j <= SEGITIGA - i; j++) {  // 1 <= 1
        s += ' '
    }

    for (let k = 1; k <= i * 2 - 1; k++) { // 1 
        s += '*'
    } console.log (s)
}

for (let i = 5; i >= 1; i--) {
    let s = ''
    for (let j = 1; j <= SEGITIGA2 - i; j++) { // 1 <= 1; |1 <= 2; 2 <= 2; | 1 <= 3; 2 <= 3; 3 <= 3; 
        s += ' '
    } 
    for (let k = 1; k <= i * 2 - SEGITIGA3; k++){ // 1 <= 7; 2<=7; 3<=7; 4<=7; 5<=7; 6<=7; 7<=7
        s += '*'
    }
    console.log(s)
}
console.log ('------------------------')

const JUMLAH6 = 5
for (let i = 1; i <= JUMLAH6; i++) {
    let s = ''
    for (let j = 1; j <= JUMLAH6 - i; j++) { // 1 <= 4; 2 <= 4; 3 <= 4; 4 <= 4; 
        s += ' '
    }
    for (let k = 1; k <= i; k++) { // 1 <= 1
        s += '*'
    } console.log (s)
}

for (let i = 1; i < JUMLAH6; i ++) {
    let s = ''
    for (let j = 1; j <= i; j++) { // 1 <= 1;
        s += ' '
    } 
    for (let k = 1; k <= JUMLAH6 - i ; k++) { // 1 <= 4; 2 <= 4; 3 <= 4; 4<=4
        s += '*'
    } console.log (s)
}
console.log ('------------------------')
// J1. 0 <= 5 = '' 1 <= 4 = '' 2 <= 4 = * 3 <= 4 = '' 4 <= 4 = '' 
// J2. 0 <= 3 = '' 1 <= 3 = * 2 <= 3 = * 3 <= 3 = * 4 <= 3 = ''
// J3. 0 <= 2 = * 1 <= 2 = * 2 <= 2 = * 3 <= 2 = * 4 <= 2 = *
// J4. 0 <= 1 = * 1 <= 1 = * 2 <= 1 = * 3 <= 1 = * 4 <= 1 = *
// J5. 0 <= 0 = * 1 <= 0 = * 2 <= 0 = * 3 <= 0 = * 4 <= 0 = *