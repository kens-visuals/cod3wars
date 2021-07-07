const parse = (data, num = 0, numArr = []) => {
  data
    .split("")
    .filter((el) => el.match(/[isdo]/gi))
    .map((el) => {
      if (el === "i") num += 1;
      if (el === "d") num -= 1;
      if (el === "s") num **= 2;
      if (el === "o") numArr.push(num);
    });

  return numArr;
};

module.exports = parse;
