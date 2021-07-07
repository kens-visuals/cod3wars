const towerBuilder = (nFloors, space, sign, arr = []) => {
  for (let i = 1; i <= nFloors; i++) {
    space = " ".repeat(nFloors - i);
    sign = "*".repeat(2 * i - 1);
    arr.push(`${space}${sign}${space}`);
  }
  return arr;
};

module.exports = towerBuilder;
