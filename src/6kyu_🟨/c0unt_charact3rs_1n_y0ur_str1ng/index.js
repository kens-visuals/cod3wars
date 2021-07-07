const count = (string) =>
  string.split("").reduce((acc, cur, i) => {
    acc[cur] ? (acc[cur] += 1) : (acc[cur] = 1);
    return acc;
  }, {});

module.exports = count;
