const wordValue = (a) => {
  const alpha = Array.from(Array(26), (_, i) =>
    String.fromCharCode(i + 97)
  ).reduce((acc, cur, i) => {
    acc[cur] = i + 1;
    return acc;
  }, {});

  return a.map(
    (el, i) =>
      el
        .replace(/\s/g, "")
        .split("")
        .map((elem) => alpha[elem])
        .reduce((acc, cur) => (acc += cur), 0) *
      (i + 1)
  );
};

module.exports = wordValue;
