const dontGiveMeFive = (start, end, arr = []) => {
  for (let i = start; i <= end; i++) arr.push(i.toString());

  return arr.filter((el) => !el.includes("5")).length;
};

module.exports = dontGiveMeFive;
