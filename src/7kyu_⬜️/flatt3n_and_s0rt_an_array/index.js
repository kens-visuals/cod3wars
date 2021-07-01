const flattenAndSort = (array) =>
  [].concat.apply([], array).sort((a, b) => a - b);

module.exports = flattenAndSort;
