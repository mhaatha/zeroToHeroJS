// Soal 2

// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

// Gunakan switch case untuk kasus ini!

// Contoh:

// let hari = 21; let bulan = 1; let tahun = 1945;

// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

//tips gunakan keyword ini di google "conditional switch case javascript"
//dan mulailah membaca dan mencontek di stackoverflow xixixi

let hari = 4; // assign nilai variabel hari disini! (dengan angka antara 1 - 31)
let bulan = 9; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun = 2023; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

//code switch case kamu disini

switch(bulan) {
    case 1:
        bulan = "Januari";
        console.log (`${hari} ${bulan} ${tahun}`);
        break;
    case 2:
        bulan = "Februari";
        console.log (`${hari} ${bulan} ${tahun}`);
        break;
    case 3:
        bulan = "Maret";
        console.log (`${hari} ${bulan} ${tahun}`);
        break;
    case 4:
        bulan = "April";
        console.log (`${hari} ${bulan} ${tahun}`);
        break;
    case 5:
        bulan = "Mei";
        console.log (`${hari} ${bulan} ${tahun}`);
        break;
    case 6:
        bulan = "Juni";
        console.log (`${hari} ${bulan} ${tahun}`);
        break;
    case 7:
        bulan = "Juli";
        console.log (`${hari} ${bulan} ${tahun}`);
        break;
    case 8:
        bulan = "Agustus";
        console.log (`${hari} ${bulan} ${tahun}`);
        break;
    case 9:
        bulan = "September";
        console.log (`${hari} ${bulan} ${tahun}`);
        break;
    case 10:
        bulan = "Oktober";
        console.log (`${hari} ${bulan} ${tahun}`);
        break;
    case 11:
        bulan = "November";
        console.log (`${hari} ${bulan} ${tahun}`);
        break;
    case 12:
        bulan = "Desember";
        console.log (`${hari} ${bulan} ${tahun}`);
        break;
    default:
        console.log("Error, masukkan bulan dengan benar.")
}