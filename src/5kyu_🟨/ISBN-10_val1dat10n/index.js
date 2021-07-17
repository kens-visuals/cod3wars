const validISBN10 = (isbn) =>
  isbn.slice(0, 9).includes("X") || isbn.length !== 10
    ? false
    : isbn
        .split("")
        .reduce(
          (acc, cur, i) => acc + (cur === "X" ? 10 * (i + 1) : cur * (i + 1)),
          0
        ) %
        11 ===
      0;

module.exports = validISBN10;
