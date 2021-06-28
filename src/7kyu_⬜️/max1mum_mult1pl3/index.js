const maxMultiple = (divisor, bound, count = 0) => {
  for (let i = 0; i <= bound; i++) if (i % divisor === 0) count = i;

  return count;
};

module.exports = maxMultiple;
