// https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript

function rot13(message) {
  const input = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const output = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm";
  let result = "";
  for (let i = 0; i < message.length; i++) {
    if (input.includes(message[i])) {
      const index = input.indexOf(message[i]);
      result += output[index];
    } else {
      result += message[i];
    }
  }
  return result;
}

console.log(rot13("Hello, World!")); // Uryyb, Jbeyq!
