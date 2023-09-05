// 1. Melakukan Looping Menggunakan While
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

/* ==============================================ALGORITMA=====================================================
    - Looping while
    - Looping yang menghitung maju dan mundur
    - Kasih judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'
    - Tunjukkan kalau looping pertama maju dan looping kedua mundur
===============================================================================================================*/

let loopingPertama = "Looping Pertama";
let loopingKedua = "Looping Kedua";
let i = 0;
let j = 10;

console.log(loopingPertama)
while (i <= 10) {
    console.log(i)
    i++
}

console.log(loopingKedua)
while (j >= 0) {
    console.log(j)
    j--
}