const disariumNumber = (n) => {
  let num = n.toString().split("").map(Number);

  for (let i = 0; i < num.length; i++) num[i] = num[i] ** (i + 1);

  return num.reduce((acc, cur) => acc + cur) !== n ? "Not !!" : "Disarium !!";
};

module.exports = disariumNumber;
