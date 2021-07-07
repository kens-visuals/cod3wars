// const toCamelCase = (str) =>
//   str
//     .split(/[-_]/g)
//     .map((el, i) => (i === 0 ? el : el.replace(el[0], el[0].toUpperCase())))
//     .join("");

const toCamelCase = (str) =>
  str.replace(/[-_]\w/gi, (el) => el.charAt(1).toUpperCase());

module.exports = toCamelCase;
