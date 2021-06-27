const rowWeights = (array) => {
  const arr1 = array.filter((_, i) => i % 2 === 0);
  const arr2 = array.filter((_, i) => i % 2 !== 0);

  return [arr1.reduce((a, b) => a + b, 0), arr2.reduce((a, b) => a + b, 0)];
};

module.exports = rowWeights;
