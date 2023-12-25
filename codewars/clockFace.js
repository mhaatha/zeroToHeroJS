// https://www.codewars.com/kata/59752e1f064d1261cb0000ec/train/javascript

const whatTimeIsIt = (angle) => {
  while (0 <= angle && angle <= 360) {
    if (angle === 0) {
      angle = 360;
    }
    let hour = Math.floor(angle / 30);
    let minute = Math.floor(angle % 30 * 2);

    if (hour < 1) {
      hour = 12;
    } else if (hour < 10) {
      hour = `0${hour}`;
    }

    if (minute < 10) {
      minute = `0${minute}`;
    }
    
    return `${hour}:${minute}`
  }
}

console.log(whatTimeIsIt(0)); // 12:00
console.log(whatTimeIsIt(90)); // 03:00
console.log(whatTimeIsIt(40)); // 01:20
console.log(whatTimeIsIt(10)); // 12:20
console.log(whatTimeIsIt(212)); // 12:20