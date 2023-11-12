/*
Function travelingIndonesia akan mengembalikan nilai sebuah string suatu perjalanan seseorang
di kota-kota besar yang ada di Indonesia.

Secara berturut-turut rute akan berlangsung ;
Yogyakarta > Semarang > Surabaya > Denpasar

Rute tersebut berlaku arah sebaliknya.
Traveller dapat menggunakan transportasi yang disediakan oleh
Pemerintah yaitu berupa :

- Pesawat, biayanya 275000
- Kereta, biayanya 250000
- Bis, biayanya 225000

Biaya tersebut berlaku untuk jarak 1 kota saja.

Dikarenakan traveller berkeliling Indonesia bertepatan dengan digalakkannya visit Indonesia
Maka traveller akan mendapatkan diskon menggunakan metode pembayaran tertentu;

- OVO > akan mendapatkan diskon 15% setiap kota
- Dana > akan mendapatkan diskon 10% setiap kota
- Gopay > akan mendapatkan diskon 5% setiap kota
- Cash > normal;

Function tersebut akan mengembalikan siapa yang mengeluarkan biaya paling besar (sudah termasuk diskon);

Note:
1. Hanya boleh menggunakan built in function .push();
*/

function travelingIndonesia(arr, emoney) {
  if (arr.length === 0) {
    return [];
  }
  let personName = [];
  let cityName = [];
  let transportName = [];
  let object = {};
  for (let i = 0; i < arr.length; i++) {
    let regexForName = /^(\w+)-/;
    let regexForCity = /-(\w+)-(\w+)-/;
    let regexForTransport = /-(\w+)$/;
    let matchName = arr[i].match(regexForName);
    let matchCity = arr[i].match(regexForCity);
    let matchTransport = arr[i].match(regexForTransport);
    if (matchName) {
      personName.push(matchName[1]);
    }
    if (matchCity) {
      cityName.push([matchCity[1], matchCity[2]]);
    }
    if (matchTransport) {
      transportName.push(matchTransport[1]);
    }
  }

  // [["Yogyakarta", "Semarang"],["Denpasar", "Surabaya"],["Semarang", "Denpasar"],];
  for (let i = 0; i < arr.length; i++) {
    let times = 0;
    let cities = ["Yogyakarta", "Semarang", "Surabaya", "Denpasar"];
    for (let j = 0; j < cities.length; j++) {
      if (cityName[i][0] === cities[j]) {
        let destinationIndex = cities.indexOf(cityName[i][1]);
        if (destinationIndex !== -1) {
          times = Math.abs(j - destinationIndex);
        }
      }
    }
    let price = 0;
    let discount = 0;
    if (transportName[i] === "Pesawat") {
      price = 275000;
    } else if (transportName[i] === "Kereta") {
      price = 250000;
    } else if (transportName[i] === "Bis") {
      price = 225000;
    }
    if (emoney === "OVO") {
      discount = price - (price * 15) / 100;
    } else if (emoney === "Dana") {
      discount = price - (price * 10) / 100;
    } else if (emoney === "Gopay") {
      discount = price - (price * 5) / 100;
    } else {
      discount = price;
    }
    if (Object.keys(object).length === 0) {
      object = [
        {
          name: personName[i],
          departureCity: cityName[i][0],
          destinationCity: cityName[i][1],
          transport: transportName[i],
          totalCost: discount * times,
        },
      ];
    } else {
      object.push({
        name: personName[i],
        departureCity: cityName[i][0],
        destinationCity: cityName[i][1],
        transport: transportName[i],
        totalCost: discount * times,
      });
    }
  }
  for (let i = 0; i < object.length - 1; i++) {
    for (let j = 0; j < object.length - i - 1; j++) {
      if (object[j].totalCost < object[j + 1].totalCost) {
        let temp = object[j];
        object[j] = object[j + 1];
        object[j + 1] = temp;
      }
    }
  }
  return object;
}

console.log(
  travelingIndonesia(
    [
      "Danang-Yogyakarta-Semarang-Bis",
      "Alif-Denpasar-Surabaya-Kereta",
      "Bahari-Semarang-Denpasar-Pesawat",
    ],
    "OVO"
  )
);
/*
[ { name: 'Bahari',
    departureCity: 'Semarang',
    destinationCity: 'Denpasar',
    transport: 'Pesawat',
    totalCost: 467500 },
  { name: 'Alif',
    departureCity: 'Denpasar',
    destinationCity: 'Surabaya',
    transport: 'Kereta',
    totalCost: 212500 },
  { name: 'Danang',
    departureCity: 'Yogyakarta',
    destinationCity: 'Semarang',
    transport: 'Bis',
    totalCost: 191250 } ]
*/
console.log(
  "=================================================================================================="
);
console.log(
  travelingIndonesia(
    [
      "Shafur-Surabaya-Yogyakarta-Kereta",
      "Taufik-Semarang-Surabaya-Pesawat",
      "Alex-Yogyakarta-Semarang-Kereta",
    ],
    "Dana"
  )
);
// // /*
// // [ { name: 'Shafur',
// //     departureCity: 'Surabaya',
// //     destinationCity: 'Yogyakarta',
// //     transport: 'Kereta',
// //     totalCost: 450000 },
// //   { name: 'Taufik',
// //     departureCity: 'Semarang',
// //     destinationCity: 'Surabaya',
// //     transport: 'Pesawat',
// //     totalCost: 247500 },
// //   { name: 'Alex',
// //     departureCity: 'Yogyakarta',
// //     destinationCity: 'Semarang',
// //     transport: 'Kereta',
// //     totalCost: 225000 } ]
// // */
console.log(
  "=================================================================================================="
);
console.log(
  travelingIndonesia(
    ["Andika-Denpasar-Surabaya-Bis", "Katy-Surabaya-Denpasar-Pesawat"],
    "Gopay"
  )
);
// // /*
// // [ { name: 'Katy',
// //     departureCity: 'Surabaya',
// //     destinationCity: 'Denpasar',
// //     transport: 'Pesawat',
// //     totalCost: 261250 },
// //   { name: 'Andika',
// //     departureCity: 'Denpasar',
// //     destinationCity: 'Surabaya',
// //     transport: 'Bis',
// //     totalCost: 213750 } ]
// // */
console.log(
  "=================================================================================================="
);
console.log(travelingIndonesia(["Putra-Denpasar-Yogyakarta-Pesawat"], "Cash"));
// // /*
// // [ { name: 'Putra',
// //     departureCity: 'Denpasar',
// //     destinationCity: 'Yogyakarta',
// //     transport: 'Pesawat',
// //     totalCost: 825000 } ]
// // */
console.log(travelingIndonesia([], "Cash")); // [];
