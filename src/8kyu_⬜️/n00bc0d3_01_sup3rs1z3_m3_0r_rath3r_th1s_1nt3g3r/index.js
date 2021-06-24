const superSize = (num) =>
  +num
    .toString()
    .split("")
    .sort((a, b) => b - a)
    .join("");

module.exports = superSize;
