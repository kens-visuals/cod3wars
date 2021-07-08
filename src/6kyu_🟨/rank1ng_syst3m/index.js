const rankings = (arr) => {
  const sorted = arr
    .slice()
    .sort((a, b) => b - a)
    .reduce((acc, cur, i) => {
      acc[cur] = i + 1;
      return acc;
    }, {});

  return arr.map((el) => sorted[el]);
};

module.exports = rankings;
