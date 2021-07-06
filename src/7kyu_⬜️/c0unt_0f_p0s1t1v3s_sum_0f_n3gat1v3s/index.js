const countPositivesSumNegatives = (input) => {
  return input === null || input.length === 0
    ? []
    : [
        input.filter((el) => el > 0).length,
        input.filter((el) => el < 0).reduce((acc, cur) => acc + cur),
      ];
};

module.exports = countPositivesSumNegatives;
