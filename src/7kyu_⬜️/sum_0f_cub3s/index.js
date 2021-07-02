const sumCubes = (n, num = 0) => {
  for (let i = n; i > 0; i--) num += i ** 3;

  return num;
};

module.exports = sumCubes;
