// https://www.codewars.com/kata/5270d0d18625160ada0000e4/train/javascript

function score(dice) {
  let score = 0;
  let counter = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
  };
  for (let i = 0; i < dice.length; i++) {
    if (dice[i] === 1) {
      score += 100;
      counter[1]++;
      if (counter[1] === 3) score += 700;
    } else if (dice[i] === 2) {
      counter[2]++;
      if (counter[2] === 3) score += 200;
    } else if (dice[i] === 3) {
      counter[3]++;
      if (counter[3] === 3) score += 300;
    } else if (dice[i] === 4) {
      counter[4]++;
      if (counter[4] === 3) score += 400;
    } else if (dice[i] === 5) {
      score += 50;
      counter[5]++;
      if (counter[5] === 3) score += 350;
    } else if (dice[i] === 6) {
      counter[6]++;
      if (counter[6] === 3) score += 600;
    }
  }
  return score;
}
