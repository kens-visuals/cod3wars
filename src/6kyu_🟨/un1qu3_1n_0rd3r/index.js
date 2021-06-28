const uniqueInOrder = (iterable) =>
  [...iterable].filter((_, i, a) => a[i + 1] !== a[i]);

module.exports = uniqueInOrder;
