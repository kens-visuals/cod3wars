// const highAndLow = (numbers) => {
//   const num = numbers
//     .split(" ")
//     .map((i) => +i)
//     .sort((a, b) => a - b);

//   return `${num[num.length - 1]} ${num[0]}`;
// };

const highAndLow = (numbers) =>
  `${Math.max(...numbers.split(" "))} ${Math.min(...numbers.split(" "))}`;

module.exports = highAndLow;
