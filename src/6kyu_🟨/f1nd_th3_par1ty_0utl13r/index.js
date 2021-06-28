const findOutlier = (integers) => {
  const odd = integers.filter((integer) => integer % 2 !== 0);
  const even = integers.filter((integer) => integer % 2 === 0);

  return odd.length < even.length ? +odd : +even;
};

module.exports = findOutlier;
