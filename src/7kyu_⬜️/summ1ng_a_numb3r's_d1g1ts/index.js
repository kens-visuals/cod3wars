const sumDigits = (number) =>
  +Math.abs(number)
    .toString()
    .split("")
    .reduce((acc, cur) => +acc + +cur);

module.exports = sumDigits;
