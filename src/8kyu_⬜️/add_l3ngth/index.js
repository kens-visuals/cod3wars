const addLength = (str) => str.split(" ").map((el) => `${el} ${el.length}`);

module.exports = addLength;
