// function findDifference(a, b) {
//   let result1 = 1,
//     result2 = 1;

//   for (let i of a) result1 *= i;
//   for (let i of b) result2 *= i;

//   return result1 < result2 ? result2 - result1 : result1 - result2;
// }

const findDifference = (a, b) =>
  Math.abs(
    a.reduce((acc, cur) => acc * cur, 1) - b.reduce((acc, cur) => acc * cur, 1)
  );

module.exports = findDifference;
