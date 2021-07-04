const isPowerOfTwo = (n) => {
  if (n === 0) return false;

  while (n !== 1) {
    n /= 2;
    if (n % 2 !== 0 && n !== 1) return false;
  }

  return true;
};

module.exports = isPowerOfTwo;
