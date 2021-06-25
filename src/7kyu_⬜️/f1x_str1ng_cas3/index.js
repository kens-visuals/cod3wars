const solve = (s) =>
  s.split("").filter((i) => i === i.toUpperCase()).length >
  s.split("").filter((i) => i === i.toLowerCase()).length
    ? s.toUpperCase()
    : s.toLowerCase();

module.exports = solve;
