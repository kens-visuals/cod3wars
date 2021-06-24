const positiveSum = require("./index");

test("fixed tests", () => {
  expect(positiveSum([1, 2, 3, 4, 5])).toBe(15);
});

test("fixed tests", () => {
  expect(positiveSum([1, -2, 3, 4, 5])).toBe(13);
});

test("fixed tests", () => {
  expect(positiveSum([])).toBe(0);
});

test("fixed tests", () => {
  expect(positiveSum([-1, -2, -3, -4, -5])).toBe(0);
});

test("fixed tests", () => {
  expect(positiveSum([-1, 2, 3, 4, -5])).toBe(9);
});
