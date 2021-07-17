const solve = (s) => {
  const alpha = Array.from(Array(26), (_, i) => i + 97)
    .map((el) => String.fromCharCode(el))
    .reduce((acc, cur, i) => {
      acc[cur] = i + 1;
      return acc;
    }, {});

  return Math.max(
    ...s
      .split(/a|e|i|o|u/gi)
      .filter((el) => el !== "")
      .map((el, i) =>
        el
          .split("")
          .map((el) => alpha[el])
          .reduce((acc, cur) => acc + cur, 0)
      )
  );
};

module.exports = solve;
