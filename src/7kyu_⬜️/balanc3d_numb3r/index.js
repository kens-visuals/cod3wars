const balancedNum = (number) => {
  number = number.toString();

  const numbers = Array.from(
    { length: (number.length - 1) / 2 },
    (_, i) => number[i] - number[number.length - 1 - i]
  );

  return numbers.reduce((total, number) => total + number, 0) === 0
    ? "Balanced"
    : "Not Balanced";
};

module.exports = balancedNum;
