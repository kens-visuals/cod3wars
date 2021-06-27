const cubeOdd = (arr) => {
  if (typeof arr.sort()[arr.length - 1] === "string") return undefined;

  return arr.filter((el) => el % 2 !== 0).reduce((a, b) => a + b ** 3, 0);
};

module.exports = cubeOdd;
