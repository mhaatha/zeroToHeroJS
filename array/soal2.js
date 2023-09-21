let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input) {
  let fullName = input[1] + "Elsharawy"; // input[1] = "Roman Alamsyah " + "Elsharawy" = "Roman Alamsyah Elsharawy"
  let province = "Provinsi " + input[2]; // "Provinsi " + input[2] = "Bandar Lampung" = "Provinsi Bandar Lampung"

  input.splice(1, 1, `${fullName}`); // Menambahkan data pada index ke 1 dan menghapus 1 data
  input.splice(2, 1, `${province}`); // Menambahkan data pada index ke 2 dan menghapus 1 data
  input.splice(4, 1, "Pria", "SMA Internasional Metro"); // Menambahkan data pada index ke 4 dan menghapus 1 data ("Membaca")
  console.log(input);

  let bulan = input[3].split("/"); // input[3] = "21/05/1989" lalu "/" dihilangkan (split) maka "21" "05" "1989"
  if (bulan[1] == "05") { // jika bulan[1] yang mana 05 == "05" = true 
    console.log("Mei");
  }

  console.log([bulan[2], bulan[0], bulan[1]]);
  console.log(bulan.join("-")) // bulan = "21" "05" "1989" kita gabungkan(join) dan diberi tanda penghubung "-"
  console.log(input[1].substring(0,15))
}

dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */
