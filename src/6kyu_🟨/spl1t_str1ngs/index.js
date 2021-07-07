const solution = (str) =>
  (str.length % 2 !== 0 ? `${str}_` : str)
    .split("")
    .map((_, i, a) => a.slice(i, i + 2).join(""))
    .filter((_, i) => i % 2 === 0);

module.exports = solution;
