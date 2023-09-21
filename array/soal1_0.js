/*
Buatlah sebuah fungsi dengan nama dataHandling dengan sebuah parameter untuk menerima argumen. Argumen yang akan diterima adalah sebuah array yang berisi beberapa array sejumlah n.
Tugas kamu adalah mengimplementasikan fungsi dataHandling agar dapat menampilkan data-data pada dari argumen seperti di bawah ini:
*/
let input = [ // length 4
  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
  ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"],
  ["0005", "Irvan Topa", "Jayapura", "2/12/1998", "Bermain Game"]
]

function dataHandling(noId, fullName, birth, hobby){
  for (i = 0; i < input.length; i++) {
    console.log(`${noId}: ${input[i][0]}`);
    console.log(`${fullName}: ${input[i][1]}`);
    let gather = `${input[0][2]}, ${input[0][3]}`
    console.log(`${birth}: ${gather}`);
    console.log(`${hobby}: ${input[0][4]} \n`)
  } 
}

dataHandling("Nomor ID", "Nama Lengkap", "TTL", "Hobi")

/*
output yang diharapkan

Nomor ID:  0001
Nama Lengkap:  Roman Alamsyah
TTL:  Bandar Lampung 21/05/1989
Hobi:  Membaca

Nomor ID:  0002
Nama Lengkap:  Dika Sembiring
TTL:  Medan 10/10/1992
Hobi:  Bermain Gitar

Nomor ID:  0003
Nama Lengkap:  Winona
TTL:  Ambon 25/12/1965
Hobi:  Memasak

Nomor ID:  0004
Nama Lengkap:  Bintang Senjaya
TTL:  Martapura 6/4/1970
Hobi:  Berkebun
*/