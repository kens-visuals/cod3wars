const order = (words) =>
  words
    .split(" ")
    .sort((a, b) => a.match(/\d/g) - b.match(/\d/g))
    .join(" ");

module.exports = order;
