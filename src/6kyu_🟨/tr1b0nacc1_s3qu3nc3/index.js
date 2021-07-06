const tribonacci = (s, n) => {
  if (n === 0) return [];
  if (s.length > n) return [n];

  for (let i = 3; i < n; i++) s[i] = s[i - 1] + s[i - 2] + s[i - 3];
  return s;
};

module.exports = tribonacci;
