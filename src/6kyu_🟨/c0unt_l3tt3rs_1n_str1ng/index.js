const letterCount = (s) =>
  s
    .split("")
    .sort()
    .reduce((acc, cur) => {
      acc[cur] = (acc[cur] || 0) + 1;
      return acc;
    }, {});

module.exports = letterCount;
