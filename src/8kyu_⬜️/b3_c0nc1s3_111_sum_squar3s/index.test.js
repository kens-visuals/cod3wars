const sumSquares = require("./index");

test("fixed tests", () => {
  expect(sumSquares([1, 2, 3, 4, 5])).toBe(55);
});

test("fixed tests", () => {
  expect(sumSquares([7, 3, 9, 6, 5])).toBe(200);
});

test("fixed tests", () => {
  expect(sumSquares([11, 13, 15, 18, 2])).toBe(843);
});

test("fixed tests", () => {
  expect(sumSquares([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5])).toBe(110);
});
