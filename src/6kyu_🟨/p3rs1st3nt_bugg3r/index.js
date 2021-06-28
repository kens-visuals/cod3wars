const persistence = (num, count = 0) => {
  if (num < 10) return count;

  count++;
  return persistence(
    num
      .toString()
      .split("")
      .reduce((a, b) => a * +b, 1),
    count
  );
};
module.exports = persistence;
