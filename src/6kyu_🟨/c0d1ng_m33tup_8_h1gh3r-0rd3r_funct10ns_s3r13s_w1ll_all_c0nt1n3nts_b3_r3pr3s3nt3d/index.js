const allContinents = (list) =>
  [...new Set(list.map((el) => el["continent"]))].length >= 5;

module.exports = allContinents;
