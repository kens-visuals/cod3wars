const shuffleIt = (arr, ...rest) => {
  for ([a, b] of rest) [arr[a], arr[b]] = [arr[b], arr[a]];
  return arr;
};

module.exports = shuffleIt;
