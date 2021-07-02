const maxGap = (numbers) =>
  Math.max(
    ...numbers
      .sort((a, b) => a - b)
      .map((el, i) => el - numbers[i - 1])
      .splice(1)
  );

module.exports = maxGap;
