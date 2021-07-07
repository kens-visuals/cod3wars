const meeting = (s) =>
  s
    .toUpperCase()
    .split(";")
    .map((el) => `(${el.split(":").reverse().join(", ")})`)
    .sort()
    .join("");

module.exports = meeting;
