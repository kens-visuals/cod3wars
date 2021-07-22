const highestRank = (arr) => {
  arr = Object.entries(
    arr.reduce((acc, cur) => {
      acc[cur] ? (acc[cur] += 1) : (acc[cur] = 1);
      return acc;
    }, {})
  );

  const max = Math.max(...arr.map(([_, count]) => count));

  const res = arr.filter(([_, count]) => count >= max);

  return res.length > 1
    ? +res.filter(([el, count]) => count >= max)[res.length - 1][0]
    : +res[0][0];
};

module.exports = highestRank;
