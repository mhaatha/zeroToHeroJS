// Variabel
var a = "a";
let b = "b";
const c = "c";

// Tipe Data

let nama = "Hafidz"; //string
let umur = 18; //integer
let apakahBenar = true; //boolean
let sisaUang = 525.000; //integer

// Operator Aritmatika
let angka1 = 45;
let angka2 = 20;
console.log(angka1 + angka2, "pertambahan");
console.log(angka1 - angka2, "pengurangan");
console.log(angka1 * angka2, "perkalian");
console.log(angka1 / angka2, "pembagian");
console.log(angka1 % angka2, "modulus");

let penampungHasilOperatorAritmatika = angka1 + angka2;
console.log(penampungHasilOperatorAritmatika);

penampungHasilOperatorAritmatika = angka1 - angka2;
console.log(penampungHasilOperatorAritmatika);

penampungHasilOperatorAritmatika = angka1 * angka2;
console.log(penampungHasilOperatorAritmatika);

penampungHasilOperatorAritmatika = angka1 / angka2;
console.log(penampungHasilOperatorAritmatika);

penampungHasilOperatorAritmatika = angka1 % angka2;
console.log(penampungHasilOperatorAritmatika);

// String bisa ditambah, namun tidak bisa dikurang dengan operator aritmetika
let firstName = 'Hafidz';
let lastName = 'Athaya';
let fullName = firstName + ' ' + lastName;
console.log(fullName);
console.log(firstName + ' ' + lastName); 
console.log(firstName - lastName); //NaN (Not a Number)

// Alur pembacaan code
// Untuk membaca code, baca dari kiri ke kanan, dan atas ke bawah

let number = 20;
let angka = 7;
let hasil = number - angka;
console.log("Nomermu adalah" + " " + hasil);
console.log("Apakah" + " " + hasil + " " + "lebih besar dari 10?");
if (hasil > 10) {
    console.log("Benar," + " " + hasil + " " + "lebih besar daripada 10");
} else {
    console.log("Salah," + " " + hasil + " " + "lebih kecil daripada 10");
}
number = false;
console.log(number-1);

// Jangan takut error. Takutlah apabila tidak ada yang namanya error. 
// Karena dalam pekerjaan apabila ada sebuah fitur yang berjalan namun terdapat bug tapi tidak ada error, hal itu menyusahkan programmer.
// Contoh error
/* const hewan = 'jerapah'; 
console.log(hewan);
hewan = 'buaya'; */ 