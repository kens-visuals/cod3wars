const factorial = (n, sum = 1) => {
  console.log(n);
  if (n < 0 || n > 12)
    throw new RangeError("The argument must be between 0 and 12.");
  if (n === 0) return 1;

  for (let i = n; i > 0; i--) sum *= i;

  return sum;
};

module.exports = factorial;
