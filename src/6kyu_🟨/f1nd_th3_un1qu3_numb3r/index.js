const findUniq = (arr) =>
  arr.sort()[0] !== arr.sort()[1] ? arr.sort()[0] : arr.sort()[arr.length - 1];

module.exports = findUniq;
