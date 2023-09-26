// Soal [1, 3, 9, 27, 81]
// Deret Geometri didapatkan dengan mengalikan suku pertama dengan rasio
// Rasio didapat dengan membagi suku ketiga dengan suku kedua
// Rumus mencari suku ke 6: index[?] = suku pertama * rasio 
// 1 * Math.pow(3, 6-1)
// 1 * 243 = suku ke 6 adalah 243  

function tentukanDeretGeometri(arr) {
    let rasio = 0;
    for (i = 0; i < arr.length; i++) {
      rasio += arr[2] / arr[1]
      if (Number.isInteger(rasio)){
        return true
      } else {
        return false
      }
    }
  }
  
  // TEST CASES
  console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
  console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
  console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
  console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
  console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false
  console.log(tentukanDeretGeometri([2, 6, 18, 54])) // true
  console.log(tentukanDeretGeometri([1, 2, 4, 8, 16])) // true