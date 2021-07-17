const minValue = (arr, n, num = n) =>
  arr
    .map((_, i, a) => a.slice(i, num++))
    .filter((el) => el.length === n)
    .map((el) => Math.min(...el));

module.exports = minValue;
