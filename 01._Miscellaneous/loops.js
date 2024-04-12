// Loop methods
// forEach, map, filter, sort, find, reduce

const dogs = [
  { name: "Lassie", fameLevel: 13 },
  { name: "Beethoven", fameLevel: 8 },
  { name: "Hachiko", fameLevel: 18 },
  { name: "Balto", fameLevel: 5 },
];

const increasedPublicityDogs = dogs.map((dog) => {
  dog.fameLevel += 3;
  return dog;
});

//console.log(increasedPublicityDogs);

const dogsWithSex = dogs.map((dog) => ({
  isFemale: dog.name === "Lassie" ? false : true,
  ...dog,
}));

console.log(dogs);
console.log(dogsWithSex);

const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((number) => number * 2);

//console.log(doubledNumbers);

const numberObjects = [{ number: 1 }, { number: 2 }];

const doubledNumberObjects = numberObjects.map((number, index, originalArray) => {
  number.number *= 2;
  return number;
});

//console.log(numberObjects);
//console.log(doubledNumberObjects);




const students = [{ name: "Steffen" }, { name: "Mathias" }, { name: "Jacob" }, { name: "Morten" }];

students.forEach((student) => {
    console.log(student.name);
});