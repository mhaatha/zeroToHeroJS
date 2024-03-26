// https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/javascript

const towerBuilder = (nFloors) => {
  const result = [];
  const space = nFloors * 2 - 1;
  let asterixToPush = "";

  for (let i = 0; i < nFloors; i++) {
    const startAsterix = nFloors - 1 - i; // 4 - 1 - 0 = 3 || 4 - 1 - 1 = 2 || 4 - 1 - 2 = 1 || 4 - 1 - 3 = 0 => START ASTERIX
    for (let z = 0; z < space; z++) {
      if (z >= startAsterix && z < space - startAsterix) {
        asterixToPush += "*";
      } else {
        asterixToPush += " ";
      }
    }

    result.push(asterixToPush);
    asterixToPush = "";
  }
  return result;
};

console.log(towerBuilder(1));
console.log(towerBuilder(2));
console.log(towerBuilder(3));
console.log(towerBuilder(4));
