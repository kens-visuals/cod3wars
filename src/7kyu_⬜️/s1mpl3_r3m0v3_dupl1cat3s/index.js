const solve = (arr) => [...new Set([...arr].reverse())].reverse();

module.exports = solve;
