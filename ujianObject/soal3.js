function highestScore(students) {
  if (students.length === 0) {
    return {};
  }
  let sortable = [];
  for (let score in students) {
    sortable.push([score, students[score]]);
  }
  sortable.sort(function (a, b) {
    return a[1] - b[1];
  });
  let foxes = students.find((students) => students.class === "foxes");
  let wolves = students.find((students) => students.class === "wolves");
  let tigers = students.find((students) => students.class === "tigers");
  let container = { foxes, wolves, tigers };
  for (let key in container) {
    if(container[key] === undefined) {
      delete container[key]
    } 
  }
  return container
}

// TEST CASE
console.log(
  highestScore([
    {
      name: "Dimitri",
      score: 90,
      class: "foxes",
    },
    {
      name: "Alexei",
      score: 85,
      class: "wolves",
    },
    {
      name: "Sergei",
      score: 74,
      class: "foxes",
    },
    {
      name: "Anastasia",
      score: 78,
      class: "wolves",
    },
  ])
);

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }

console.log(
  highestScore([
    {
      name: "Alexander",
      score: 100,
      class: "foxes",
    },
    {
      name: "Alisa",
      score: 76,
      class: "wolves",
    },
    {
      name: "Vladimir",
      score: 92,
      class: "foxes",
    },
    {
      name: "Albert",
      score: 71,
      class: "wolves",
    },
    {
      name: "Viktor",
      score: 80,
      class: "tigers",
    },
  ])
);

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }

console.log(highestScore([])); //{}
