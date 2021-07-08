const ranks = (a) => {
  const newArr = a.slice().sort((a, b) => b - a);
  return a.map((el) => newArr.indexOf(el) + 1);
};

module.exports = ranks;
