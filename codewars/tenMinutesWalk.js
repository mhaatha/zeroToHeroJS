// https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript

//     N
//  W  0  E
//     S

function isValidWalk(walk) {
  let x = 0;
  let y = 0;

  for (let i = 0; i < walk.length; i++) {
    if (walk[i] === "n") {
      x++;
    } else if (walk[i] === "s") {
      x--;
    } else if (walk[i] === "w") {
      y++;
    } else if (walk[i] === "e") {
      y--;
    }
  }
  if (x === 0 && y === 0 && walk.length === 10) {
    return true;
  } else {
    return false;
  }
}

console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"])); // True;
console.log(isValidWalk(["n", "s", "n", "s", "n", "s"])); // False;
console.log(isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"])); // False;
