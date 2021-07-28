const str = (color, el) => `<span style="color: ${color}">${el}</span>`;

const highlight = (code) =>
  code
    .replace(/L+/g, (el) => str("red", el))
    .replace(/F+/g, (el) => str("pink", el))
    .replace(/R+/g, (el) => str("green", el))
    .replace(/[0-9]+/g, (el) => str("orange", el));

module.exports = highlight;
