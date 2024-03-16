// https://www.codewars.com/kata/515decfd9dcfc23bb6000006/train/javascript

const isValidIP = (ipAddress) => {
  const regex = new RegExp(/^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4}$/g);
  return regex.test(ipAddress);
};

console.log(isValidIP('0.0.0.0')); // true
console.log(isValidIP('12.255.56.1')); // true
console.log(isValidIP(' 1.2.3.4')); // false
