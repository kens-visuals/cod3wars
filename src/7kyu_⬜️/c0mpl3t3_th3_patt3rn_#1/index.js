const pattern = (n) =>
  Array.from({ length: n }, (_, i) => i + 1)
    .map((el) => el.toString().repeat(el))
    .join("\n");

module.exports = pattern;
