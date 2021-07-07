const dataReverse = (data, arr = []) => {
  for (let i = 0, j = 8; i < data.length; i += 8, j += 8)
    arr.push(data.slice(i, j));

  return arr.reverse().reduce((acc, cur) => [...acc, ...cur], []);
};

module.exports = dataReverse;
