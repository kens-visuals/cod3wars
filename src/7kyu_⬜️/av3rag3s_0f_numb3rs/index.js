const averages = (numbers, arr = []) => {
  if (numbers === null || numbers.length <= 1) return [];

  for (let i = 0; i < numbers.length; i++)
    arr.push((numbers[i] + numbers[i + 1]) / 2);

  return arr.slice(0, -1);
};

module.exports = averages;
