const stringTransformer = (str) =>
  str
    .replace(/\w/g, (el) =>
      el === el.toLowerCase() ? el.toUpperCase() : el.toLowerCase()
    )
    .split(" ")
    .reverse()
    .join(" ");

module.exports = stringTransformer;
