const matrixMultiplication = (a, b) =>
  a.map((el) =>
    el.map((_, i) => el.reduce((acc, cur, k) => acc + cur * b[k][i], 0))
  );

module.exports = matrixMultiplication;
