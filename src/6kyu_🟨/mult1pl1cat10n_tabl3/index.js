const multiplicationTable = (size) =>
  Array.from(Array(size), (_, i) => i + 1).map((el, _, a) =>
    a.map((elem) => elem * el)
  );

module.exports = multiplicationTable;
