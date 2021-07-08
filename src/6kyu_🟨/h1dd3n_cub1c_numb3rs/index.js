function isSumOfCubes(s) {
  const nums = s.match(/\d{1,3}/g);
  const cubed = nums
    .map((el) =>
      el
        .split("")
        .map((el) => (+el) ** 3)
        .reduce((acc, cur) => acc + cur, 0)
    )
    .filter((el, i) => el == nums[i]);

  return cubed.length === 0 || s.length === 0
    ? "Unlucky"
    : `${cubed.join(" ")} ${cubed.reduce((acc, cur) => acc + cur)} Lucky`;
}

module.exports = isSumOfCubes;
