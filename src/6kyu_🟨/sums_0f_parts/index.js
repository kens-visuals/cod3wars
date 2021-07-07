const partsSums = (ls) => {
  let sum = ls.reduce((acc, cur) => acc + cur, 0);
  return [sum, ...ls.map((el) => (sum -= el))];
};

module.exports = partsSums;
