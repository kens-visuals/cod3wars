const firstDup = (s) =>
  s.split("").filter((el) => s.indexOf(el) !== s.lastIndexOf(el))[0];

module.exports = firstDup;
