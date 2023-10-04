function changeMe(arr) {
  const container = {};
  for (let i = 0; i < arr.length; i++) {
    const people = {};
    people["firstName"] = arr[i][0];
    people["lastName"] = arr[i][1];
    people["gender"] = arr[i][2];
    if (arr[i][3]) {
      people["age"] = new Date().getFullYear() - arr[i][3];
    } else {
      people["age"] = "Invalid Birth Year";
    }
    container[arr[i][0] + " " + arr[i][1]] = people;
  }
  return container;
}

// TEST CASES
console.log(
  changeMe([
    ["Christ", "Evans", "Male", 1982],
    ["Robert", "Downey", "Male"],
  ])
);
// Christ Evans: { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 41 }
// Robert Downey: { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }

console.log(changeMe([])); // ""
