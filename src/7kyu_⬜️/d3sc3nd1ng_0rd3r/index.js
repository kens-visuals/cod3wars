const descendingOrder = (n) =>
  +n
    .toString()
    .split("")
    .sort((a, b) => b - a)
    .join("");

module.exports = descendingOrder;
