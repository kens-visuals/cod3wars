const minSum = (arr) => {
  const arr1 = arr.sort((a, b) => a - b).slice(0, arr.length / 2);
  const arr2 = arr.sort((a, b) => b - a).slice(0, arr.length / 2);

  return arr1.map((el, i) => el * arr2[i]).reduce((acc, cur, i) => acc + cur);
};

module.exports = minSum;
