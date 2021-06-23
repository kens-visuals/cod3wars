// function padIt(str, n) {
//   let i = 1;
//   while (i <= n) {
//     i % 2 !== 0 ? (str = "*" + str) : (str += "*");
//     i++;
//   }
//   return str;
// }

const padIt = (str, n) => {
  while (n > 0) str = n-- % 2 ? "*" + str : str + "*";

  return str;
};

module.exports = padIt;
