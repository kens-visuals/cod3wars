const moveZeros = (arr) => [
  ...arr.filter((el) => el !== 0),
  ...arr.join("").match(/0/g).map(Number),
];

module.exports = moveZeros;
