const sumTwoSmallestNumbers = (numbers) =>
  numbers
    .sort((a, b) => a - b)
    .slice(0, 2)
    .reduce((cur, acc) => cur + acc);

module.exports = sumTwoSmallestNumbers;
