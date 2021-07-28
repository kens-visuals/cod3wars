// function matrixAddition(a, b, result = []) {
//   const A = a.reduce((acc, cur) => [...acc, ...cur], []);
//   const B = b.reduce((acc, cur) => [...acc, ...cur], []);

//   const array = A.map((el, i) => el + B[i]);

//   for (let i = 0; i < array.length; i += a.length)
//     result.push(array.slice(i, i + a.length));

//   return result;
// }

const matrixAddition = (a, b) =>
  a.map((el, i) => el.map((el, k) => el + b[i][k]));

module.exports = matrixAddition;
