const solve = (arr) => {
  const alpha = "abcdefghijklmnopqrstuvwxyz".split("");

  return arr
    .map((el) =>
      el
        .toLowerCase()
        .split("")
        .filter((el, i) => el === alpha[i])
    )
    .map((el) => el.join("").length);
};

module.exports = solve;
