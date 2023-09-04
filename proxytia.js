// Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya. 
// Untuk memulai game itu diperlukan 2 variabel (untuk sekarang), 
// yaitu nama dan peran. Variabel peran harus memiliki isi data, 
// bila nama kosong, pemain akan diberikan peringatan berupa "nama wajib diisi"
// bila peran kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game". 
// Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir. 
// Tugas Anda adalah untuk membuat program yang mengecek isi variabel 
// peran serta mengeluarkan respon sesuai isi variabel tersebut.
//ada 4 jenis respons sesuai dengan 3 jenis peran yaitu
//halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!
//halo Tabib ${nama} , kamu akan membantu temanmu yang terluka
//halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!
//tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada
//tips belajar penggunaan `` (backtick) pada javascript agar
//mudah dalam memasukan variabel ke dalam string
//tapi tanpa backtick juga ga masalah sih yg penting output sesuai

// algoritma
//isi algoritma mu disini (AWAS KALO GA DI ISI!!!!)
console.log("Selamat datang di dunia Proxytia.");
let nama="Udin", peran="Ksatria";
let Ksatria, Tabib, Penyihir;
//code disini gunakan console.log untuk outputnya

if (nama == '') {
    console.log ('Nama wajib diisi.');
}

if (peran == 'Ksatria') {
    console.log (`Halo ${peran} ${nama}, kamu dapat menyerang dengan pedangmu.`);
} else if (peran == 'Tabib'){
    console.log (`Halo ${peran} ${nama}, kamu dapat mengobati temanmu yang terluka.`);
} else if (peran == 'Penyihir') {
    console.log (`Halo ${peran} ${nama}, ciptakan keajaiban yang membuatmu menuju kemenangan.`);
} else {
    console.log (`Kamu jadi minion aja ya, peran yang kamu pilih tidak ada.`)
}

// menambahkan comment