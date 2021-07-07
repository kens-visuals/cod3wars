function balance(book) {
  // Filter 'book' and return as array
  const sum = book
    .split("\n")
    .filter((el) => el !== "")
    .map((el) =>
      el
        .split("")
        .filter((el) => el.match(/[\w|\d|\.|\s]/g))
        .join("")
    );

  // original = e.g. 1233.00
  // transactions = e.g. ['125 Hardware 24.8','123 Flowers 93.5'...]
  let [original, ...transactions] = sum;
  const origninalStr = `Original Balance: ${parseFloat(original).toFixed(2)}`;

  // category = e.g. ['125 Hardware','123 Flowers'...]
  const category = transactions
    .map((el) => el.split(" "))
    .map(([n, s]) => `${n} ${s}`);

  // numbers = e.g. ['24.80','93.50','120.90'...]
  const numbers = transactions
    .map((el) => el.split(" "))
    .map(([, , el]) => parseFloat(el).toFixed(2));

  const total = numbers
    .map(Number)
    .reduce((acc, cur) => acc + cur, 0)
    .toFixed(2);

  const totalStr = `Total expense  ${total}`;
  const averageStr = `Average expense  ${(total / numbers.length).toFixed(2)}`;

  // balance = ['Balance 1208.20','Balance 1114.70'...]
  const balance = numbers.reduce((acc, cur) => {
    acc.push(`Balance ${(original -= cur).toFixed(2)}`);
    return acc;
  }, []);

  // transactionsStr= '125 Hardware 24.80 Balance 1208.20'
  const transactionsStr = category.map(
    (el, i) => `${el} ${numbers[i]} ${balance[i]}`
  );

  return [origninalStr, ...transactionsStr, totalStr, averageStr].join("\r\n");
}

module.exports = balance;
