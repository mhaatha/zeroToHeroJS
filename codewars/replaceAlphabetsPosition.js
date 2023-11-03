// https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript

function alphabetPosition(text) {
  let lowerCase = text.toLowerCase().match(/[a-z]/gi); // Membuat text menjadi huruf kecil, dan memfilter hanya angka saja, tidak boleh ada simbol atau angka.
  let result = "";
  const alphabetNumbers = {
    a: "1",
    b: "2",
    c: "3",
    d: "4",
    e: "5",
    f: "6",
    g: "7",
    h: "8",
    i: "9",
    j: "10",
    k: "11",
    l: "12",
    m: "13",
    n: "14",
    o: "15",
    p: "16",
    q: "17",
    r: "18",
    s: "19",
    t: "20",
    u: "21",
    v: "22",
    w: "23",
    x: "24",
    y: "25",
    z: "26",
  };
  if (lowerCase === null) { // Jika text yang dimasukkan berisi hanya simbol, maka akan terjadi null dan akan langsung mereturn string kosong.
    return "";
  }
  for (let i = 0; i < lowerCase.length; i++) {
    if (i < lowerCase.length - 1) { // Jika i bukan index terakhir
      for (let j = 0; j < 26; j++) {
        if (lowerCase[i] === Object.keys(alphabetNumbers)[j]) { 
          result += alphabetNumbers[lowerCase[i]] + " ";
        }
      }
    } else {
      for (let j = 0; j < 26; j++) {
        if (lowerCase[i] === Object.keys(alphabetNumbers)[j]) {
          result += alphabetNumbers[lowerCase[i]];
        }
      }
    }
  }
  return result;
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
console.log(alphabetPosition("rwa,od0"));
console.log(alphabetPosition("4;}|#0&3"));
