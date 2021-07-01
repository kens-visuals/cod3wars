const reverseNumber = (n) =>
  n < 0
    ? -+n.toString().slice(1).split("").reverse().join("")
    : +n.toString().split("").reverse().join("");

module.exports = reverseNumber;
