const repeats = (arr, hash = {}) => {
  arr.forEach((el) => (hash[el] ? delete hash[el] : (hash[el] = 1)));

  return Object.keys(hash)
    .map(Number)
    .reduce((acc, cur) => acc + cur, 0);
};

module.exports = repeats;
