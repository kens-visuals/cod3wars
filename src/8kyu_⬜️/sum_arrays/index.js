// function sum(numbers) {
//   return numbers.reduce((acc, mov) => acc + mov, 0);
// }

const sum = (numbers) =>
  numbers.length === 0 ? 0 : numbers.reduce((acc, cur) => acc + cur);

module.exports = sum;
