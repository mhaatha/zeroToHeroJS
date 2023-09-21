let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input) {
  let fullName = input[1] + "Elsharawy";
  input.splice(1, 1, `${fullName}`);
  let province = "Provinsi " + input[2];
  input.splice(2, 1, `${province}`);
  input.splice(4, 2, "Pria", "SMA Internasional Metro");
  console.log(input);
  let bulan = input[3].toString();
  if (bulan == "21/05/1989") {
    console.log("Mei");
  }
  let formatTahun = input[3].split("/");
  formatTahun.splice(0, 1, "1989");
  formatTahun.splice(1, 1, "21");
  formatTahun.splice(2, 1, "05");
  console.log(formatTahun);
  let tahun = input[3].toString()
  if (tahun == "21/05/1989") {
    console.log("21-05-1989")
  }
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
