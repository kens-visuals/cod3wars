const squareSum = require("./index");

test("fixed tests", () => {
  expect(squareSum([1, 2])).toBe(5);
});

test("fixed tests", () => {
  expect(squareSum([0, 3, 4, 5])).toBe(50);
});
