const rotate = (str) =>
  str.split("").map((_, i) => `${str.slice(i + 1)}${str.slice(0, i + 1)}`);

module.exports = rotate;
