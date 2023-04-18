// using includes method

const pets = ["cat", "dog", "bat"];
// write a function to check if the input has the value that is inside the array

function checkName(petName) {
  // logic here
  if (pets.includes(petName)) {
    return `the ${petName} is in the list`;
  } else {
    return `the ${petName} is not in the list`;
  }
}
console.log(checkName("cat"));
console.log(checkName("pig"));

checkName("cat");
// expected outcome: "the cat is in the list"

checkName("pig");
// expected outcome: "the pig is not in the list"

// using some method
const array = [1, 2, 3, 4, 5];
// write a function to check if the input number is odd or even

function checkNumber(number) {
  // logic here
  if (array.includes(number % 2 === 0)) {
    return `the ${number} is a even number`;
  } else {
    return `the ${number} is a odd number`;
  }
}
console.log(checkNumber(3));
console.log(checkNumber(4));

checkNumber(3);
// expected outcome: "the number 3 is a odd number"

checkNumber(4);
// expected outcome: "the number 4 is a even number"
