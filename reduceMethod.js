const number = [25, 45, 55, 77, 88, 99];
// using for loop to calculate the total value of elements in the array
let sum = 0;
for (let i = 0; i < number.length; i++) {
  sum = sum + number[i];
}
console.log(sum);

const sum1 = number.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum1);
