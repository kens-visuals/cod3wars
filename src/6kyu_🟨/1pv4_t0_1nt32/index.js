const ipToInt32 = (ip) =>
  ip
    .split(".")
    .map((el) => +el)
    .reverse()
    .reduce((acc, cur, i) => acc + cur * 256 ** i, 0);

module.exports = ipToInt32;
