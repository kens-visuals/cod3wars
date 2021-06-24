const XO = (str) => {
  let num1 = 0,
    num2 = 0;

  str = str.toLowerCase().split("");

  for (let i of str) {
    if (i === "x") num1++;
    if (i === "o") num2++;
  }

  return num1 === num2 ? true : false;
};

module.exports = XO;
