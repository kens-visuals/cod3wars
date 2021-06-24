const positiveSum = (arr) =>
  arr.filter((el) => el > 0).reduce((cur, acc) => cur + acc, 0);

module.exports = positiveSum;
