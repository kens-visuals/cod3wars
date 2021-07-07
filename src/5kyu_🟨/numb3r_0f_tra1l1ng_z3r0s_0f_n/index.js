const zeros = (n) => {
  let num = 0;

  while (n > 0) {
    n = Math.floor(n / 5);
    num += n;
  }

  return num;
};

module.exports = zeros;
