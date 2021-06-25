const sumTwoSmallestNumbers = require("./index");

test("fixed tests", () => {
  expect(sumTwoSmallestNumbers([5, 8, 12, 19, 22])).toBe(13);
});

test("fixed tests", () => {
  expect(sumTwoSmallestNumbers([15, 28, 4, 2, 43])).toBe(6);
});

test("fixed tests", () => {
  expect(sumTwoSmallestNumbers([3, 87, 45, 12, 7])).toBe(10);
});

test("fixed tests", () => {
  expect(sumTwoSmallestNumbers([23, 71, 33, 82, 1])).toBe(24);
});

test("fixed tests", () => {
  expect(sumTwoSmallestNumbers([52, 76, 14, 12, 4])).toBe(16);
});
