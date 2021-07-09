const pigIt = (str) =>
  str
    .split(" ")
    .map(
      (el) =>
        `${el.match(/\W/g) ? `${el}` : `${el.slice(1)}${el.slice(0, 1)}ay`}`
    )
    .join(" ");

module.exports = pigIt;
