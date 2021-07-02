const pairs = (ar) => {
  ar.length % 2 !== 0 ? ar.splice(-1, 1) : ar;

  return ar
    .map((_, i, a) => a.slice(i, i + 2))
    .filter((_, i) => i % 2 === 0)
    .map((el) => Math.abs(el[1] - el[0]))
    .filter((el) => el === 1).length;
};

module.exports = pairs;
