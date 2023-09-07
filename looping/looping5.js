// 5. Bintang asteriks
// Problem buatlah bintang seperti berikut
// let input = 5
//hasilnya
//*
//**
//***
//****
//*****

/* ==============================================ALGORITMA=====================================================
    - Jika '*' == 0 maka '*'++
===============================================================================================================*/

let bintang = "*"

for (let i = 0; i < 10; i++) {
    console.log(bintang)
    bintang += bintang[i]
}

let s = ""

for (let j = 10; j > 0; j--) {
    for (let k = 0; k < j; k++) {
        s += '*'
    } 
    s += '\n'
}  
console.log(s)


// let s = ""

// for (let i = 5; i >= 0; i--) { 
//     for (let j = 0; j < i; j++) {
//         s += '*'
//     }
//     s += '\n'
// }         
// console.log (s)

// bintang = "*"
// bintang2 = "*****"

// for (let star = 0; star < 1; star++) { 
//     for(let star2 = 0; star2 < 5; star2++) { 
//         console.log(bintang) 
//         bintang += bintang[star2] 
//     } for (let star3 = 0; star3 < 5; star3++) {
//         console.log(bintang)
//         bintang2 += bintang[star3]
//     }
// }   
 