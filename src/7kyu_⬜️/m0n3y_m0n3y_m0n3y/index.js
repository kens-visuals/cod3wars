const calculateYears = (principal, interest, tax, desired) => {
  if (principal === desired) return 0;

  for (let i = 1; principal < desired; i++) {
    principal += principal * interest * (1 - tax);

    if (principal >= desired) return i;
  }
};

module.exports = calculateYears;
