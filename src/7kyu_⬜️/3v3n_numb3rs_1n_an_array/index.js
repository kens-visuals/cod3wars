const evenNumbers = (array, number) =>
  array.filter((num) => num % 2 === 0).slice(-number);

module.exports = evenNumbers;
