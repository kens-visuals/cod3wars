const validSpacing = (s) =>
  s
    .split(" ")
    .filter((el) => el.trim())
    .join(" ") === s;

module.exports = validSpacing;
