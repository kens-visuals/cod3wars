const maxProduct = (numbers, size) =>
  numbers
    .sort((a, b) => b - a)
    .slice(0, size)
    .reduce((acc, cur) => acc * cur);

module.exports = maxProduct;
