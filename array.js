// Exercise 1

const vegetables = ["garlic", "carrot", "broccoli", "pumpkin"];
// 1. Sort the array in alphabetically

// 2. What is the length of the array

// 3. Write a function called myVeggieList to console.log() the length of the array

// 4. Push one more item to the array called "onion"

// 5. Write a function using if-else condition to check if the length of the array is bigger than 4.

// 6.  Using forEach or map to loop and console.log() the item in the array

// 7. using slice to remove the element carrot in the array

// Exercise 2
const characters = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 77,
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: 188,
    mass: 84,
    eye_color: "blue",
    gender: "male",
  },
];

// 1. Get characters with mass greater than 100

// 2. Get characters with height less than 200

// 3. Get all male characters

// 4. Get all female characters

// Exercise 3
const numberList = [1, 2, 3, 4, 5, 6, 7, 8];
// using reduce method to get the sum of all numbers in the numberList array

// using find method to get the first element that bigger than 3

// using findIndex method to get the index of the first number that smaller than 7

// Exercise 1

// 1. Sort the array in alphabetically
console.log(vegetables.sort());

// 2. What is the length of the array
console.log(vegetables.length);

// 3. Write a function called myVeggieList to console.log() the length of the array
function myVeggieList() {
  vegetables.length;
}
myVeggieList();

// 4. Push one more item to the array called "onion"
vegetables.push("onion");
console.log(vegetables);

// 5. Write a function using if-else condition to check if the length of the array is bigger than 4.
function checkLength() {
  if (vegetables.length > 4) {
    console.log("Big arrey");
  } else {
    console.log("Small arrey");
  }
}
checkLength();

// 6.  Using forEach or map to loop and console.log() the item in the array
vegetables.forEach((veg) => {});
console.log(vegetables);

// 7. using slice to remove the element carrot in the array
const indexOfVeg = vegetables.indexOf("carrot");
if (indexOfVeg > 0) {
  vegetables.splice(indexOfVeg, 1);
}
console.log(vegetables);

// Exercise 2

// 1. Get characters with mass greater than 100
const characterMass = characters.filter((character) => character.mass > 100);
console.log(characterMass);

// 2. Get characters with height less than 200
const characterHeight = characters.filter(
  (character) => character.height < 200
);
console.log(characterHeight);

// 3. Get all male characters
const maleClaracters = characters.filter(
  (character) => character.gender === "male"
);
console.log(maleClaracters);

// 4. Get all female characters
const femaleCharacter = characters.filter(
  (character) => character.gender === "female"
);
console.log(femaleCharacter);

// Exercise 3
// using reduce method to get the sum of all numbers in the numberList array
const sum = numberList.reduce(
  (accumulator, current) => accumulator + current,
  0
);
console.log(sum);

// using find method to get the first element that bigger than 3
const result = numberList.find((element) => element > 3);
console.log(result);

// using findIndex method to get the index of the first number that smaller than 7
const index = numberList.findIndex((element) => element < 7);
console.log(index);
