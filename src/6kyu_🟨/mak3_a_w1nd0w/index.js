const makeAWindow = (num) => {
  const dot = ".".repeat(num);
  const row = `|${dot}|${dot}|`;
  const line = "-".repeat(row.length);
  const lineLength = `${"-".repeat(row.length / 2 - 1)}`;
  const middle = `|${lineLength}+${lineLength}|`;
  const rowRepeated = `${row
    .split(" ")
    .map((el) => (el + "\n").repeat(num))
    .join("")}`;

  return `${line}\n${rowRepeated}${middle}\n${rowRepeated}${line}`;
};

module.exports = makeAWindow;
