// const solution = (number, arr = []) => {
//   for (let i = 1; i < number; i++) if (i % 3 === 0 || i % 5 === 0) arr.push(i);

//   return arr.reduce((a, b) => a + b, 0);
// };

const solution = (number) =>
  number <= 0
    ? 0
    : Array.from(Array(number - 1), (_, i) => i + 1)
        .filter((el) => el % 3 === 0 || el % 5 === 0)
        .reduce((acc, cur) => acc + cur, 0);

module.exports = solution;
