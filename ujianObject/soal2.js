/*
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
*/

function naikAngkot(arrPenumpang) {
  if (arrPenumpang.length === 0) {
    return [];
  }
  const rute = ["A", "B", "C", "D", "E", "F"];
  const hargaPerRute = 2000;
  const penumpangAngkot = [];

  for (let i = 0; i < arrPenumpang.length; i++) {
    const penumpang = arrPenumpang[i][0];
    const naikDari = arrPenumpang[i][1];
    const tujuan = arrPenumpang[i][2];

    const indeksNaik = rute.indexOf(naikDari);
    const indeksTujuan = rute.indexOf(tujuan);

    const bayar = (indeksTujuan - indeksNaik) * hargaPerRute;

    const dataPenumpang = {
      penumpang: penumpang,
      naikDari: naikDari,
      tujuan: tujuan,
      bayar: bayar,
    };

    penumpangAngkot.push(dataPenumpang);
  }
  return penumpangAngkot;
}

//TEST CASE
console.log(
  naikAngkot([
    ["Dimitri", "B", "F"],
    ["Icha", "A", "B"],
  ])
);
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

//   console.log(naikAngkot([])); //[]
