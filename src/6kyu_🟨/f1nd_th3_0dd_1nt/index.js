const findOdd = (A) => {
  return +Object.entries(
    A.reduce((acc, cur) => {
      acc[cur] = (acc[cur] || 0) + 1;
      return acc;
    }, {})
  ).filter((el) => el[1] % 2)[0][0];

  //   for (let el of A) obj[el] ? (obj[el] += 1) : (obj[el] = 1);

  //   return +Object.entries(obj).filter((el) => el[1] % 2)[0][0];
};

module.exports = findOdd;
