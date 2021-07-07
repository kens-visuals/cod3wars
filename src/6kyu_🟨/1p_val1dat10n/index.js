const isValidIP = (str) =>
  str
    .split(".")
    .filter(
      (el) =>
        el === parseInt(el).toString() &&
        parseInt(el) >= 0 &&
        parseInt(el) <= 255
    ).length === 4;

module.exports = isValidIP;
