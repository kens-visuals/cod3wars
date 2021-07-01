const factorial = (n, num = 1) => {
  for (let i = n; i > 0; i--) num *= i;

  return num;
};

module.exports = factorial;
