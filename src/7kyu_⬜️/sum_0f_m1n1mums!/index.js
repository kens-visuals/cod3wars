// const sumOfMinimums = (arr, newArr = []) => {
//   for (let i of arr) newArr.push(Math.min(...i));

//   return newArr.reduce((acc, cur) => acc + cur, 0);
// };

const sumOfMinimums = (arr) =>
  arr.map((el) => Math.min(...el)).reduce((acc, cur) => acc + cur, 0);

module.exports = sumOfMinimums;
