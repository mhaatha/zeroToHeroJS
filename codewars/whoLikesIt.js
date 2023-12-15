// https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript

const likes = (names) => {
  // Revisi dari chatGPT

  const length = names.length;

  switch(length) {
    case 0: 
      return `no one likes this`;
      break;
    case 1:
      return `${names} likes this`;
      break;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
      break;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`
      break;
    default:
      return `${names[0]}, ${names[1]} and ${length - 2} others like this`
  }


  // My Code
  // if (names.length < 1) {
  //   return 'no one likes this';
  // } else if (names.length === 1) {
  //   return `${names} likes this`;
  // }
  // let name = '';
  
  // for (let i = 0; i < names.length; i++) {
  //   if (names.length === 2) {
  //     if (i === 0) {
  //       name += names[i] + ' and ' + names[i + 1];
  //     } 
  //   } else if (names.length === 3) {
  //     if (i === 1) {
  //       name += ', ' + names[i] + ' and ';
  //     } else {
  //       name += names[i];
  //     }
  //   } else if (names.length > 3) {
  //     if (i === 0) {
  //       name += names[i];
  //     } else if (i === 1) {
  //       let left = names.length - (i + 1)
  //       name += ', ' + names[i] + ' and ' + left + ' others';
  //     }
  //   }
  // }
  // return `${name} like this`;
};

console.log(likes([]));
console.log(likes(['Peter']));
console.log(likes(['Jacob', 'Alex']));
console.log(likes(['Max', 'John', 'Mark']));
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));
