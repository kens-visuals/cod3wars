const findAll = (array, n) =>
  array.reduce((acc, cur, i) => {
    if (cur === n) acc.push(i);
    return acc;
  }, []);

module.exports = findAll;
