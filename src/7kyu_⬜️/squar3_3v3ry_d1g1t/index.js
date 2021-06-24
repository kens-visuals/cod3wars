const squareDigits = (num) =>
  +num
    .toString()
    .split("")
    .map((el) => el ** 2)
    .join("");

module.exports = squareDigits;
