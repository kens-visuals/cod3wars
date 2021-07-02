const factorial = (n) => (n < 0 ? null : n === 0 ? 1 : n * factorial(--n));

const strong = (n) =>
  n
    .toString()
    .split("")
    .map(Number)
    .reduce((acc, cur) => acc + factorial(cur), 0) === n
    ? "STRONG!!!!"
    : "Not Strong !!";

module.exports = strong;
