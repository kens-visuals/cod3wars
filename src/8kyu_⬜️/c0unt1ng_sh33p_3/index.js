const countSheeps = (arrayOfSheep) =>
  arrayOfSheep.filter((ship) => ship === true).length;

module.exports = countSheeps;
