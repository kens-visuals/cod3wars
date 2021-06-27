const partlist = (arr) =>
  arr
    .map((_, i, a) => [a.slice(0, i + 1).join(" "), a.slice(i + 1).join(" ")])
    .slice(0, -1);

module.exports = partlist;
