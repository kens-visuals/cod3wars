const SeriesSum = (n, num = 1, count = 1) => {
  for (let i = 1; i < n; i++) count += 1 / (num += 3);

  return n === 0 ? "0.00" : count.toFixed(2);
};

module.exports = SeriesSum;
