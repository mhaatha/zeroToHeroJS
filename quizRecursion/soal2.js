/*
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi
*/
function changeVocals(str) {
  let container = "";
  const vocalsLetter = {
    A: "B",
    I: "J",
    U: "V",
    E: "F",
    O: "P",
    a: "b",
    i: "j",
    u: "v",
    e: "f",
    o: "p",
  };
  for (let i = 0; i < str.length; i++) {
    if (vocalsLetter[str[i]]) {
      container += vocalsLetter[str[i]];
    } else {
      container += str[i];
    }
  }
  return container;
}

function reverseWord(str) {
  let container = "";
  for (let i = str.length - 1; i >= 0; i--) {
    container += changeVocals(str[i]);
  }
  return container;
}

function setLowerUpperCase(str) {
  let container = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "a" && str[i] <= "z") {
      container += str[i].toUpperCase();
    } else if (str[i] >= "A" && str[i] <= "Z") {
      container += str[i].toLowerCase();
    } else {
      container += str[i];
    }
  }
  return reverseWord(container);
}

function removeSpaces(str) {
  let container = "";
  for (let i = 0; i < str.length; i++) {
    container += str[i];
  }

  return setLowerUpperCase(container.split(" ").join(""));
}

function passwordGenerator(name) {
  if (name.length < 5) {
    return `Minimal karakter yang diinputkan adalah 5 karakter`
  }
  let container = "";
  for (let i = 0; i < name.length; i++) {
    container += name[i]
  }
  return removeSpaces(container)
}

console.log(passwordGenerator("Sergei Dragunov")); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator("Dimitri Wahyudiputra")); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator("Alexei")); // 'JFXFLb'
console.log(passwordGenerator("Alex")); // 'Minimal karakter yang diinputkan adalah 5 karakter'
