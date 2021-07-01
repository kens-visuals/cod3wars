const adjacentElementsProduct = (array, arr = []) => {
  for (let i = 0; i < array.length - 1; i++) arr.push(array[i] * array[i + 1]);

  return Math.max(...arr);
};

module.exports = adjacentElementsProduct;
