const sumSquares = (array) =>
  array.map((i) => i ** 2).reduce((acc, cur) => acc + cur);

module.exports = sumSquares;
