const findShort = (s) =>
  s.split(" ").sort((a, b) => a.length - b.length)[0].length;

module.exports = findShort;
