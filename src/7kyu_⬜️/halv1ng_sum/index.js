const halvingSum = (n) => (n === 1 ? 1 : n + halvingSum(Math.floor(n / 2)));

module.exports = halvingSum;
