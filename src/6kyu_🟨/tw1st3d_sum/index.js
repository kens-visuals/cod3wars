const twistedSum = (n) =>
  Array.from({ length: n }, (_, i) => `${i + 1}`)
    .map((el) =>
      el.length >= 2 ? el.split("").reduce((acc, cur) => acc + +cur, 0) : +el
    )
    .reduce((acc, cur) => acc + cur, 0);

module.exports = twistedSum;
