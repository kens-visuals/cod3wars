const roundToNext5 = require("./index");

test("fixed tests", () => {
  [
    [0, 0],
    [1, 5],
    [3, 5],
    [5, 5],
    [7, 10],
    [39, 40],
  ].forEach(([x, out]) => expect(roundToNext5(x)).toBe(out));
});
