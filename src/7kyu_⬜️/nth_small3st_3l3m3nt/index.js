const nthSmallest = (arr, pos) =>
  +arr.sort((a, b) => a - b).slice(pos - 1, pos);

module.exports = nthSmallest;
