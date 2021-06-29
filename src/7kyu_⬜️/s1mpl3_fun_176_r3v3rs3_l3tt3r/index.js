const reverseLetter = (str) =>
  str
    .split("")
    .reverse()
    .filter((el) => /[a-z]/gi.test(el))
    .join("");

module.exports = reverseLetter;
