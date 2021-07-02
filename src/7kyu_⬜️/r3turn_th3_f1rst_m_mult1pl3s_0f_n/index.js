const multiples = (m, n, arr = []) => {
  for (let i = 1; i <= m; i++) arr.push(n * i);

  return arr;
};

module.exports = multiples;
