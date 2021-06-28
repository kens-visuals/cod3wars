const gimme = (inputArray) =>
  inputArray.findIndex(
    (el) => el > Math.min(...inputArray) && el < Math.max(...inputArray)
  );

module.exports = gimme;
