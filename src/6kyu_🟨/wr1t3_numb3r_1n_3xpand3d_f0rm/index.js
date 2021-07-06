const expandedForm = (num) =>
  num
    .toString()
    .split("")
    .reverse()
    .map((el, i) => +el * 10 ** i)
    .reverse()
    .filter((el) => el > 0)
    .join(" + ");

module.exports = expandedForm;
