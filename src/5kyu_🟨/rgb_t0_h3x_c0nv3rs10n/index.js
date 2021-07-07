const rgb = (r, g, b) =>
  [r, g, b]
    .map((el) => (el < 0 ? 0 : el > 255 ? 255 : el).toString(16))
    .map((el) => (el.length === 1 ? "0" + el : el))
    .join("")
    .toUpperCase();

module.exports = rgb;
