// function fiveLine(s) {
//   s = s.trim();
//   return `${s}\n${s}${s}\n${s}${s}${s}\n${s}${s}${s}${s}\n${s}${s}${s}${s}${s}`;
// }

const fiveLine = (s) =>
  Array.from({ length: 5 }, (_, i) => s.trim().repeat(i + 1)).join("\n");

module.exports = fiveLine;
