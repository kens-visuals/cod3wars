const sumEvenNumbers = (input) =>
  input.filter((el) => el % 2 === 0).reduce((acc, cur) => acc + cur);

module.exports = sumEvenNumbers;
