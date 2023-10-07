const car = {
  name: "Fiat",
  model: 500,
  weight: "850kg",
  color: "white",
};
car.owner = "Hafidz";
console.log(car);
console.log(`The car type is: ${car.name}`);
console.log(`The car model is: ${car.model}`);
console.log(`The car weight is: ${car.weight}`);
console.log(`The car color is: ${car.color}`);
console.log(`The car owner is: ${car.owner}`);

const student = {
  firstName: "Jotaro",
  lastName: "Joestar",
  age: 19,
  eyeColor: "green",
  fullname: function () {
    return this.firstName + " " + this.lastName;
  },
};
console.log(student);
console.log(`His first name is: ${student.firstName}`);
console.log(`His last name is: ${student.firstName}`);
console.log(`His age is: ${student.age}`);
console.log(`His eyes color is: ${student.eyeColor}`);
console.log(`His fullname is ${student.fullname()}`);
