const mineLocation = (field) => {
  let arr = [];

  for (let i = 0; i < field.length; i++) {
    if (field[i].includes(1)) arr.push(i);
    for (let j = 0; j < field[i].length; j++) {
      if (field[i][j] === 1) arr.push(j);
    }
  }

  return arr;
};

module.exports = mineLocation;
