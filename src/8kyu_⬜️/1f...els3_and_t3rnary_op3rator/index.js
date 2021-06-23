// function saleHotdogs(n) {
//   return n * (n < 5 ? 100 : n >= 5 && n < 10 ? 95 : 90);
// }

const saleHotdogs = (n) => n * (n < 5 ? 100 : n >= 5 && n < 10 ? 95 : 90);

module.exports = saleHotdogs;
