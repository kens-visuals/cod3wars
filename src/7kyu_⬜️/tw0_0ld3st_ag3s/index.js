const twoOldestAges = (ages) => ages.sort((a, b) => a - b).slice(-2);

module.exports = twoOldestAges;
