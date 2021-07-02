const jumpingNumber = (n, arr = []) =>
  n
    .toString()
    .split("")
    .map((_, i, a) => Math.abs(a[i] - a[i + 1]))
    .slice(0, -1)
    .every((el) => el === 1)
    ? "Jumping!!"
    : "Not!!";

module.exports = jumpingNumber;
