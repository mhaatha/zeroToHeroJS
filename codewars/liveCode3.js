/*
****************
Advanced Seating
****************
trainSeating adalah sebuah function yang menerima parameter berupa 
array of object.
Yang harus mengeluarkan hasil sebuah object yang memiliki isi key 
berdasarkan jenis gerbong penumpang.
Yang berisi daftar nama penumpang dan tempat duduk penumpang.

Contoh input dan output bisa dilihat di test case.


*/

function trainSeating(penumpang) {
  let jenisGerbong = {};

  for (let i = 0; i < penumpang.length; i++) {
    const indexSekarang = penumpang[i];
    if (jenisGerbong[indexSekarang.gerbong] === undefined) {
      jenisGerbong[indexSekarang.gerbong] = [
        {
          nama: indexSekarang.nama,
          seat: indexSekarang.seat,
        },
      ];
    } else {
      jenisGerbong[indexSekarang.gerbong].push({
        nama: indexSekarang.nama,
        seat: indexSekarang.seat,
      });
    }
  }
  return jenisGerbong;
}

console.log(
  trainSeating([
    {
      nama: "Awtian",
      gerbong: "VVIP",
      seat: "A1",
    },
    {
      nama: "Klonoa",
      gerbong: "VIP",
      seat: "V1",
    },
    {
      nama: "Azizy",
      gerbong: "VVIP",
      seat: "A2",
    },
    {
      nama: "Crash",
      gerbong: "Regular",
      seat: "R1",
    },
    {
      nama: "Sena",
      gerbong: "Regular",
      seat: "R3",
    },
    {
      nama: "Heri",
      gerbong: "Regular",
      seat: "R10",
    },
    {
      nama: "Retsu",
      gerbong: "VIP",
      seat: "V2",
    },
    {
      nama: "Hiruma",
      gerbong: "VVIP",
      seat: "A666",
    },
    {
      nama: "Tsubasa",
      gerbong: "VIP",
      seat: "V6",
    },
  ])
);
/*
Output :
{
  VVIP:
   [ { nama: 'Awtian', seat: 'A1' },
     { nama: 'Azizy', seat: 'A2' },
     { nama: 'Hiruma', seat: 'A666' } ],
  VIP:
   [ { nama: 'Klonoa', seat: 'V1' },
     { nama: 'Retsu', seat: 'V2' },
     { nama: 'Tsubasa', seat: 'V6' } ],
  Regular:
    [ { nama: 'Crash', seat: 'R1' },
      { nama: 'Sena', seat: 'R3' },
      { nama: 'Heri', seat: 'R10'} ]
}
*/
