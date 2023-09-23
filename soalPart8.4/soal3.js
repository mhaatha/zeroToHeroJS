/* ======================ALGORITMA======================
    - Kalimat adalah string
    - Ubah ke array dan gunakan method split untuk membagi kata
    - Gunakan method length untuk mengetahui berapa jumlah length dari array kalimat
    - Begitulah kira-kira :v
*/

function hitungJumlahKata(kalimat) {
  let array = kalimat.split(" ");
  return array.length;
}
  
  // TEST CASES
  console.log(hitungJumlahKata('I have a dream')); // 4
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5
  console.log(hitungJumlahKata('Halo namaku Uzumaki Udin dan aku berasal dari desa awikwokgakure'));