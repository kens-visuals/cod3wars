const findNextSquare = (sq) =>
  Number.isInteger((Math.sqrt(sq) + 1) ** 2) ? (Math.sqrt(sq) + 1) ** 2 : -1;

module.exports = findNextSquare;
