const solve = (str) => {
  const arr = str.split("").filter((x) => x !== " ");

  return str.replace(/\S/g, (_) => arr.pop());
};

module.exports = solve;
