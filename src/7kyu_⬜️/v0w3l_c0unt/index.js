const getCount = (str) =>
  str.split("").filter((el) => el.match(/[aeiou]/gi)).length;

module.exports = getCount;
