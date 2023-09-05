// Looping ada 2 jenis, while dan for

// let i = 5;

// while (i >= 5) {
    // console.log(i);
    // i++
// }

// Dalam looping ada yang namanya arah, kiri atau kanan, kiri itu pengurangan, kanan itu pertambahan

// for (let i = 0; i < 5; i++) {
    // console.log (i);
// }

// let nama = "udin";

// Ada yang namanya method length untuk tipe data string dan array
// Method length mengembalikan nilai angka, total huruf yang ada pada string atau total element yang ada pada array

// for (let i = 0; i < nama.length; i++) {
//     console.log(nama[i])
// }

// Pada tipe data string dan array di JS ada yang namanya indexing, dimana index SUDAH PASTI berawal dari 0

// Diberikan kasus untuk membalikan suatu kata, tanpa menggunakan method reverse
// let name = "agus"; // Length = 4 a>0, g>1, u>2, s>3
// let result = "";

// for (let i = name.length - 1; i >= 0; i--) { // i = 4(name.length)-1; 4-1 >= 0; i--
//     result += name [i];
// }
// console.log(result)

// let nama = "hafidz"; // Length = 6 0->h, 1->a, 2->f, 3->i, 4->d, 5->z
// let hasil = "";

// for (let i = nama.length - 1; i >= 0; i-- ) {
//     hasil += nama [i]
// }
// console.log(hasil)
console.log('nested loop')
for (let i = 0; i < 5; i++) { // Parent akan false jika i bernilai 5 atau ketika sarang sudah looping 5 kali
    for (let j = 0; j < 10; j++) { // Nested akan false jika j yang bernilai 0 sudah ditambah 1 hingga 10 kali
        console.log (j)
    }
    console.log ('') // Setelah proses looping j selesai dan sebelum kembali ke parent (looping) ditambahkan spasi.
} console.log ('selesai')

// "Parent Loop" let i = 0 dan i < 5 maka i ditambah 1 (i++) dengan cara melooping sarang dibawahnya. 
// "Parent Loop" Apabila sarang berhasil di looping, maka akan ditambahkan ke parent +1 hingga i atau parent bernilai false.

// Kesimpulan: looping akan sering bertemu dengan method length 
// Looping berfungsi membuat code lebih pendek
// Looping berfungsi juga membuat suatu proses menjadi dinamis