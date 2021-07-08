const strToHash = (str) => {
  if (!str) return {};

  const letters = str.match(/\w+/g).filter((el, i) => i % 2 === 0);
  const nums = str.match(/\w+/g).filter((el, i) => i % 2 !== 0);

  return letters.reduce((acc, cur, i) => {
    acc[cur] = +nums[i];
    return acc;
  }, {});
};

module.exports = strToHash;
