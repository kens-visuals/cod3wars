// const pyramid = (n) =>
//   Array.from(Array(n), (el, i) => (el = [`1`.repeat(i + 1)])).map((el) =>
//     el.join("").split("").map(Number)
//   );

const pyramid = (n) => Array.from(Array(n), (_, i) => Array(i + 1).fill(1));

module.exports = pyramid;
