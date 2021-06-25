const inAscOrder = (arr) =>
  arr
    .slice()
    .sort((a, b) => a - b)
    .join("") === arr.join("");

module.exports = inAscOrder;
