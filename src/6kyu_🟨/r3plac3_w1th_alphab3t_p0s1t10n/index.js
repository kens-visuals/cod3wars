const alphabetPosition = (text, letters = {}) => {
  "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .forEach((el, i) => (letters[el] = i + 1));

  return text
    .toLowerCase()
    .split("")
    .filter((el) => /[a-z]/g.test(el))
    .map((el) => letters[el])
    .join(" ");
};

module.exports = alphabetPosition;
