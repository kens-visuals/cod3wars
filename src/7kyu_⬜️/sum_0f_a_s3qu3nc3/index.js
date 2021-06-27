const sequenceSum = (begin, end, step, num = 0) => {
  for (let i = begin; i <= end; i += step) {
    num += i;
  }
  return num;
};

module.exports = sequenceSum;
