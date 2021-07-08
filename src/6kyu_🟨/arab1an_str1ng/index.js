const camelize = (str) =>
  str
    .toLowerCase()
    .split(/\_+|\s+|\W+/g)
    .filter((el) => el !== "")
    .map((el) => el.replace(el[0], el[0].toUpperCase()))
    .join("");

module.exports = camelize;
