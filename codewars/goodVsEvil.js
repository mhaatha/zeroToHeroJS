// https://www.codewars.com/kata/52761ee4cffbc69732000738/train/javascript

const goodVsEvil = (good, evil) => {
  let teamOfGood = good.split(' ');
  let teamOfEvil = evil.split(' ');
  let counterOfGood = 0;
  let counterOfEvil = 0;

  const worthOfGood = [1, 2, 3, 3, 4, 10];
  const worthOfEvil = [1, 2, 2, 2, 3, 5, 10];

  for (let i = 0; i < teamOfGood.length; i++) {
    counterOfGood += worthOfGood[i] * parseInt(teamOfGood[i]);
  }
  for (let i = 0; i < teamOfEvil.length; i++) {
    counterOfEvil += worthOfEvil[i] * parseInt(teamOfEvil[i]);
  }

  if (counterOfGood < counterOfEvil) {
    return 'Battle Result: Evil eradicates all trace of Good';
  } else if (counterOfGood > counterOfEvil) {
    return 'Battle Result: Good triumphs over Evil';
  } else {
    return 'Battle Result: No victor on this battle field';
  }
};

console.log(goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1'));
console.log(goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0'));
console.log(goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0'));
