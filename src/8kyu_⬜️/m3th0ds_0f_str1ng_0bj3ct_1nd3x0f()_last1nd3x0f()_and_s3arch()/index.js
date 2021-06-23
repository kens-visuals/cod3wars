// function firstToLast(str, c) {
//   return str.lastIndexOf(c) < 0 ? -1 : str.lastIndexOf(c) - str.indexOf(c);
// }

const firstToLast = (str, c) =>
  str.indexOf(c) !== -1 ? str.lastIndexOf(c) - str.indexOf(c) : str.indexOf(c);

module.exports = firstToLast;
