const stray = (numbers) => {
  numbers.unshift(numbers[1]);

  for (let i of numbers) if (i !== numbers[0]) num = i;

  return num;
};

module.exports = stray;
