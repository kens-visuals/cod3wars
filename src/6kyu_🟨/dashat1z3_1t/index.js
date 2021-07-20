const dashatize = (num) => {
  if (isNaN(num)) return "NaN";

  const number = Math.abs(num)
    .toString()
    .split("")
    .map((el, i, a) => {
      if (+el % 2 !== 0 && +a[i + 1] % 2 !== 0) el = `-${el}`;
      if (+el % 2 !== 0 && +a[i + 1] % 2 === 0) el = `-${el}-`;
      return el;
    })
    .join("");

  return number.slice(0, 1) === "-" ? number.slice(1) : number;
};

module.exports = dashatize;
