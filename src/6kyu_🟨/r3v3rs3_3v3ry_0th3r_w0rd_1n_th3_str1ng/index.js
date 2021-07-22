const reverse = (str) =>
  str.trim() === ""
    ? ""
    : str
        .split(" ")
        .map((el, i) => (i % 2 !== 0 ? el.split("").reverse().join("") : el))
        .join(" ");

module.exports = reverse;
