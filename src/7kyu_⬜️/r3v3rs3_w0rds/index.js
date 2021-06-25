const reverseWords = (str) =>
  str
    .split(" ")
    .map((i) => i.split("").reverse().join(""))
    .join(" ");

module.exports = reverseWords;
