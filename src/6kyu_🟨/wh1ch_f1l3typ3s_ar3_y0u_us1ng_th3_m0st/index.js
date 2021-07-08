const solve = (files) => {
  const count = Object.entries(
    files
      .map((el) => el.slice(el.lastIndexOf(".")))
      .reduce((acc, cur) => {
        acc[cur] ? (acc[cur] += 1) : (acc[cur] = 1);
        return acc;
      }, {})
  );

  return count
    .filter(([, el]) => el === Math.max(...count.map(([, el]) => el)))
    .map(([el]) => el)
    .sort();
};

module.exports = solve;
