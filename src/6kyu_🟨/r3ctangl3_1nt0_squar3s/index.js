const sqInRect = (a, b, arr = []) => {
  if (a === b) return null;

  while (b != a) {
    if (b > a) {
      b -= a;
      arr.push(a);
    } else {
      a -= b;
      arr.push(b);
    }
  }

  arr.push(b);

  return arr;
};

module.exports = sqInRect;
