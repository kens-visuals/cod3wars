const isSortedAndHow = (array) => {
  const s = array.join("");
  return s === array.sort((x, y) => x - y).join("")
    ? "yes, ascending"
    : s === array.sort((x, y) => y - x).join("")
    ? "yes, descending"
    : "no";
};

module.exports = isSortedAndHow;
