const solve = (s) => Math.max(...s.match(/\d+/g).map(Number));

module.exports = solve;
