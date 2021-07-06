const high = (x) => {
  let alpha = Array.from({ length: 26 }, (_, i) => i + 97)
    .map((el) => String.fromCharCode(el))
    .reduce((obj, el, i) => {
      obj[el] = i + 1;
      return obj;
    }, {});

  let ind = x.split(" ").map((el) =>
    el
      .split("")
      .map((el) => alpha[el])
      .reduce((acc, cur) => acc + cur)
  );

  return x.split(" ").find((_, i) => i === ind.indexOf(Math.max(...ind)));
};

module.exports = high;
