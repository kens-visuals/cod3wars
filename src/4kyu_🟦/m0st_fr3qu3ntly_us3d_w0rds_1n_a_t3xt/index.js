const topThreeWords = (text) =>
  Object.entries(
    text
      .toLowerCase()
      .replace(/\s+'\s+|\s+|[^\w+'\w\s]/g, " ")
      .split(" ")
      .filter((el) => el !== "")
      .reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc;
      }, {})
  )
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .reduce((acc, cur) => [...acc, cur[0]], []);

module.exports = topThreeWords;
