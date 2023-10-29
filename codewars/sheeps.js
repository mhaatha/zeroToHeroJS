function countSheeps(sheep) {
    let counter = 0;
    for (let i = 0; i < sheep.length; i++) {
        if (sheep[i] === true) {
            counter++;
        }
    }
    return counter;
}

let sheeps = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];

console.log(countSheeps(sheeps));
