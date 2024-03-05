const amountOfPages = (summary) => {
  let counter = 1;
  let result = '';
  while (result.length !== summary) {
    result += counter;
    if (result.length === summary) {
      break;
    } else {
      counter++;
    }
  }

  return counter;
};

console.log(amountOfPages(9));
console.log(amountOfPages(25));
console.log(amountOfPages(5));
