const getMiddle = (s) =>
  s
    .split("")
    .splice(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1)
    .join("");

module.exports = getMiddle;
