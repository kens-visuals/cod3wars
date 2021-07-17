const deleteNth = (arr, n, count = {}) =>
  arr.filter((el) => {
    count[el] = (count[el] || 0) + 1;
    return count[el] <= n;
  });

module.exports = deleteNth;
