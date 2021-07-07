const diamond = (n) => {
  if (n < 0 || n % 2 === 0) return null;

  const main = Array.from({ length: n + 1 }, (_, i) => i)
    .filter((el) => el % 2 !== 0)
    .reverse()
    .map((el, i) => `${" ".repeat(i)}${"*".repeat(el)}`)
    .reverse();

  return [...main, ...main.slice().reverse().slice(1), ""].join("\n");
};

module.exports = diamond;
