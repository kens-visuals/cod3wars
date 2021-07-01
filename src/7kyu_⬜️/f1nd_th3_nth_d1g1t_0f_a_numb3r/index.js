const findDigit = (num, nth) => {
  if (nth <= 0) return -1;
  nth -= 1;

  return num < 0
    ? +num
        .toString()
        .replace("-", "0")
        .split("")
        .reverse()
        .slice(nth, nth + 1)
    : +num
        .toString()
        .split("")
        .reverse()
        .slice(nth, nth + 1);
};

module.exports = findDigit;
