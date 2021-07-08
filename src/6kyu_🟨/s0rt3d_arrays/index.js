const nthSmallest = (...arr) => {
  let newArr = [...arr];
  const n = +newArr.splice(-1);
  newArr = newArr.reduce((a, b) => [...a, ...b], []).sort((a, b) => a - b);

  return +newArr.slice(n - 1, n);
};

module.exports = nthSmallest;
