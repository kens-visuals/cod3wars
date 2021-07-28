function twosDifference(input) {
  const arr = [];

  for (let i = 0; i < input.length; i++)
    for (let j = 0; j < input.length; j++)
      if (input[j] - input[i] === 2) arr.push([input[i], input[j]]);

  return arr.sort((a, b, i) => a[0] - b[0]);
}

module.exports = twosDifference;
