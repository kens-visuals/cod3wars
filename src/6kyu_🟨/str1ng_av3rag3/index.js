const averageString = (str) => {
  const numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  const nums = str.split(" ").map((v) => numbers.indexOf(v));
  if (nums.includes(-1)) return "n/a";

  return numbers[
    Math.floor(nums.reduce((prev, cur) => prev + cur) / nums.length)
  ];
};

module.exports = averageString;
