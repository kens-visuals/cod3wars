const comp = (array1, array2) =>
  array1 === null || array2 === null
    ? false
    : array2.sort((a, b) => a - b).length ===
      array1
        .map((el) => el ** 2)
        .sort((a, b) => a - b)
        .filter((el, i) => el === array2[i]).length;

module.exports = comp;
