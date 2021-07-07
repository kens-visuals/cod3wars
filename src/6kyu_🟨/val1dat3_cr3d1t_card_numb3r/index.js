const validate = (n) =>
  n
    .toString()
    .split("")
    .map(Number)
    .map((el, i, a) => {
      if (a.length % 2 === 0) return i % 2 === 0 ? el * 2 : el;
      else return i % 2 !== 0 ? el * 2 : el;
    })
    .map((el) => (el >= 9 ? el - 9 : el))
    .reduce((acc, cur) => acc + cur) %
    10 ===
  0;

module.exports = validate;
