const removeSmallest = (numbers) => {
  const num = numbers.slice();
  num.splice(num.indexOf(Math.min(...numbers)), 1);
  return num;
};

module.exports = removeSmallest;
