const solution = (list) =>
  list
    .reduce((acc, cur) => {
      const subArr = acc[acc.length - 1];

      if (!subArr || subArr[subArr.length - 1] !== cur - 1) acc.push([]);

      acc[acc.length - 1].push(cur);

      return acc;
    }, [])
    .map((el) =>
      el.length > 2 ? `${el.slice(0, 1)}-${el.slice(-1)}` : `${el}`
    )
    .join(",");

module.exports = solution;
