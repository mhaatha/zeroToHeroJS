// Median adalah nilai tengah dari sebuah kumpulan data yang telah diurutkan
// Sorting array
// Jika array.length berjumlah ganjil, maka Math.floor(array.length / 2 + 1)
// Jika array.length berjumlah genap, maka ((array.length / 2) + (array.length / 2 + 1)) / 2

function cariMedian(arr) {
  arr.sort(function (a, b) {return a - b;});
  
  let ganjil = Math.floor(arr.length / 2);
  let genap = Math.floor(arr.length / 2 - 1);
  if (arr.length % 2 === 1) {
    return arr[ganjil];
  } else {
    return (arr[genap] + arr[genap + 1]) / 2;
  }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([3, 4, 7, 6, 10])); // 6
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([7, 7, 8, 8])); // 7.5
