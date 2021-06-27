// const findLongest = (array) => {
//   let newArr = array
//     .map((el) => el.toString())
//     .sort((a, b) => a.length - b.length)
//     .slice(-1)
//     .join("");

//   return +array
//     .map((el) => el.toString())
//     .filter((el) => newArr.length === el.length)
//     .slice(0, 1);
// };

const findLongest = (array) =>
  array.reduce((a, b) => (`${b}`.length > `${a}`.length ? b : a));

module.exports = findLongest;
