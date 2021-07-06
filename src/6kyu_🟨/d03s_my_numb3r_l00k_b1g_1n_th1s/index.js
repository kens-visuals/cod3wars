const narcissistic = (value) =>
  value
    .toString()
    .split("")
    .reduce((acc, cur, _, arr) => acc + cur ** arr.length, 0) === value;

module.exports = narcissistic;
