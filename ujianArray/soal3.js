function groupAnimals(animals) {
  animals.sort();
  let penampung = [];
  let hasil = [];
  for (i = 0; i < animals.length; i++) {
    if (penampung.length === 0 || animals[i][0] === penampung[0][0]) {
      penampung.push(animals[i]);
    } else {
      hasil.push(penampung);
      penampung = [animals[i]];
    }
  }
  
  if (penampung.length > 0) {
    hasil.push(penampung);
  }
  return hasil;
}

// // TEST CASES
console.log(groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil"])); // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(
  groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil", "unta", "cicak"])
);
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
