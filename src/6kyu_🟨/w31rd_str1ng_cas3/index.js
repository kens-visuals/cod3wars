const toWeirdCase = (string) =>
  string
    .toLowerCase()
    .split(" ")
    .map((el) =>
      el
        .split("")
        .map((el, i) => (i % 2 === 0 ? el.toUpperCase() : el))
        .join("")
    )
    .join(" ");

module.exports = toWeirdCase;
