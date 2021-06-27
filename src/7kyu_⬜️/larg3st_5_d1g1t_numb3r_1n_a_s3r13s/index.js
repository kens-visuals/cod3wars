const solution = (digits) =>
  Math.max(
    ...digits
      .toString()
      .split("")
      .map((_, i, a) => a.slice(i, i + 5).join(""))
  );

module.exports = solution;
