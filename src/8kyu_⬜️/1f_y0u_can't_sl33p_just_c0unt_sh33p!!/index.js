// const countSheep = function (num) {
//   let str = "";
//   for (let i = 1; i <= num; i++) {
//     str += `${i} sheep...`;
//   }
//   return str;
// };

const countSheep = (num) =>
  Array.from(Array(num), (_, i) => `${++i} sheep...`).join("");

module.exports = countSheep;
