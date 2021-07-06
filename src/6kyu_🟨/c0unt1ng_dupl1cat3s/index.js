const duplicateCount = (text) =>
  [
    ...new Set(
      text
        .toLowerCase()
        .split("")
        .filter((el, _, a) => a.indexOf(el) !== a.lastIndexOf(el))
    ),
  ].length;

module.exports = duplicateCount;
