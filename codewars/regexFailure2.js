function filterWords(phrase) {
  return phrase.replace(/(bad|mean|ugly|horrible|hideous)/gi, "awesome");
}

console.log(filterWords("you are Bad Timmy"));
console.log(filterWords("You're MEAN! timmy!"));
