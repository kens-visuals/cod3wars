const solution = (input, markers) => {
  const [sign1, sign2] = markers;
  const reg = new RegExp(`\\${sign1}.*|\\${sign2}.*`, "g");

  return input
    .replace(reg, "")
    .trim()
    .split("\n")
    .map((el) => el.trim())
    .join("\n");
};

module.exports = solution;
