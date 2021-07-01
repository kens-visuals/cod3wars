const menFromBoys = (arr) => [
  ...new Set(arr.filter((el) => el % 2 === 0).sort((a, b) => a - b)),
  ...new Set(arr.filter((el) => el % 2 !== 0).sort((a, b) => b - a)),
];

module.exports = menFromBoys;
