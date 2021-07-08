const isLanguageDiverse = (list) => {
  const nums = Object.values(
    list
      .map((el) => el.language)
      .reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc;
      }, {})
  );

  return Math.min(...nums) * 2 >= Math.max(...nums);
};

module.exports = isLanguageDiverse;
