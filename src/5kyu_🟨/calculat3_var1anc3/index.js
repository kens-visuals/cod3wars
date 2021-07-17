const mean = (numbers) =>
  numbers.reduce((acc, cur) => acc + cur, 0) / numbers.length;

const variance = (numbers) =>
  numbers.reduce((acc, cur) => acc + (cur - mean(numbers)) ** 2, 0) /
  numbers.length.toFixed(4);

module.exports = variance;
