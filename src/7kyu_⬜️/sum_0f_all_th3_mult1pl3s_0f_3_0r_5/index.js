const findSum = (n) =>
  Array.from(Array(n + 1), (_, i) => i)
    .filter((el) => el % 3 === 0 || el % 5 === 0)
    .reduce((acc, cur) => acc + cur);

module.exports = findSum;
