const iqTest = (numbers) => {
  numbers = numbers.split(" ");

  const odd = numbers.filter((el) => el % 2 !== 0).join("");
  const even = numbers.filter((el) => el % 2 === 0).join("");

  return even.length > odd.length
    ? numbers.indexOf(odd) + 1
    : numbers.indexOf(even) + 1;
};

module.exports = iqTest;
