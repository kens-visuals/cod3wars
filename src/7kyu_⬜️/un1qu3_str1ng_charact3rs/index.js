const filterChars = (str1, str2) =>
  str1
    .split("")
    .filter((el) => !str2.includes(el))
    .join("");

const solve = (a, b) => filterChars(a, b) + filterChars(b, a);

module.exports = solve;
