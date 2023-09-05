// 2. Melakukan Looping Menggunakan For
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
// tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

/* ==============================================ALGORITMA=====================================================
    - Looping for
    - Looping yang menghitung maju dan mundur
    - Kasih judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'
    - Tunjukkan kalau looping pertama maju dan looping kedua mundur
===============================================================================================================*/

let loopingPertama = "Looping Pertama Maju";
let loopingKedua = "Looping Kedua Mundur";

console.log (loopingPertama);
for (let i = 0; i <= 10; i++) {
    console.log (i)
}
console.log (loopingKedua);
for (let j = 10; j >= 0; j--) {
    console.log(j)
}