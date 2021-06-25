const divisors = (integer, arr = []) => {
  for (let i = 1; i <= integer; i++) if (integer % i === 0) arr.push(i);

  return arr.length === 2
    ? `${arr.slice(1).join("")} is prime`
    : arr.slice(1, -1);
};

module.exports = divisors;
