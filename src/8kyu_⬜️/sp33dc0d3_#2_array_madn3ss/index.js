const arrayMadness = (a, b) =>
  a.reduce((c, a) => c + a ** 2, 0) > b.reduce((c, a) => c + a ** 3, 0);

module.exports = arrayMadness;
