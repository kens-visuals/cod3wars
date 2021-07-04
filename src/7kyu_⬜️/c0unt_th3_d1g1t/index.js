const nbDig = (n, d) =>
  Array.from({ length: n + 1 }, (_, i) => i ** 2)
    .toString()
    .split("")
    .filter((el) => +el === d).length;

module.exports = nbDig;
