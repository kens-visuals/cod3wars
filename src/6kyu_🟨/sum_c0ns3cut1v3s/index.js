const sumConsecutives = (s) =>
  s.reduce((acc, cur, i) => {
    cur !== s[i - 1] ? acc.push(cur) : (acc[acc.length - 1] += cur);
    return acc;
  }, []);

module.exports = sumConsecutives;
