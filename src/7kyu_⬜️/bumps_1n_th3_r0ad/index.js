const bump = (x) =>
  x.split("").filter((el) => el === "n").length <= 15 ? "Woohoo!" : "Car Dead";

module.exports = bump;
