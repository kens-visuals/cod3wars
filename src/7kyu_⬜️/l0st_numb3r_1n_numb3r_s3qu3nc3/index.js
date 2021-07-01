const findDeletedNumber = (arr, mixArr) =>
  +arr.filter((el) => mixArr.sort((a, b) => a - b).indexOf(el) === -1);

module.exports = findDeletedNumber;
