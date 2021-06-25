const palindromeChainLength = (n, count = 0, rev = 0) => {
  while (n != (rev = +n.toString().split("").reverse().join(""))) {
    n += rev;
    count++;
  }
  return count;
};

module.exports = palindromeChainLength;
