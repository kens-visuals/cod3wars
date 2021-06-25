// const isIsogram = (str) => {
//   str = str.toLowerCase().split("");

//   for (let i = 0; i < str.length; i++) {
//     for (let j = i + 1; j < str.length; j++) {
//       if (str[i] === str[j]) {
//         return false;
//       }
//     }
//   }
//   return true;
// };

const isIsogram = (str) =>
  str
    .toLowerCase()
    .split("")
    .filter((el, _, a) => a.indexOf(el) === a.lastIndexOf(el)).length ===
  str.length;

module.exports = isIsogram;
