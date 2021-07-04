const myLanguages = (results) =>
  Object.entries(results)
    .sort((a, b) => b[1] - a[1])
    .filter((el) => el[1] >= 60)
    .map((el) => el[0]);

module.exports = myLanguages;
