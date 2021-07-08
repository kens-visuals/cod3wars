const alphabetized = (s) =>
  "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .map((e) => (s.match(new RegExp(e, "gi")) || []).join(""))
    .join("");

module.exports = alphabetized;
