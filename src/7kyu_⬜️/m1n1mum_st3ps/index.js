const minimumSteps = (numbers, value, sum = 0) => {
  numbers = numbers.sort((a, b) => a - b);

  for (let [i, el] of numbers.entries()) {
    sum += el;
    if (sum >= value) return i;
  }
};
module.exports = minimumSteps;
