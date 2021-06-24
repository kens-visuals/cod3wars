const accum = (s) =>
  s
    .toLowerCase()
    .split("")
    .map((el, i) => el.charAt(0).toUpperCase() + el.repeat(i))
    .join("-");

module.exports = accum;
