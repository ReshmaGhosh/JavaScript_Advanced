// Exercise 1
const number = [25, 45, 55, 77, 88, 99];
// Using map() to square each number in the array

// Using map() to return a new array the double value of element

// Exercise 2

const strings = ["avengers", "captain america", "iron man", "black panther"];
//   Using map() to return a new array that the first letter in the word would be uppercase

// Exercise 1
// Using map() to square each number in the array
const squareNumber = number.map((num) => num * num);
console.log(squareNumber);

// Using map() to return a new array the double value of element
const dubbleValue = number.map((num) => num * 2);
console.log(dubbleValue);

// Exercise 2
//   Using map() to return a new array that the first letter in the word would be uppercase
const uppercaseLetter = strings.map(
  (str) => str.charAt(0).toUpperCase() + str.slice(1)
);
console.log(uppercaseLetter);
