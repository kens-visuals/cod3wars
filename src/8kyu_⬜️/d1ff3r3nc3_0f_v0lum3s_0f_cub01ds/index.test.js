const findDifference = require("./index");

test("fixed tests", () => {
  expect(findDifference([3, 2, 5], [1, 4, 4])).toBe(14);
});

test("fixed tests", () => {
  expect(findDifference([9, 7, 2], [5, 2, 2])).toBe(106);
});

test("fixed tests", () => {
  expect(findDifference([11, 2, 5], [1, 10, 8])).toBe(30);
});

test("fixed tests", () => {
  expect(findDifference([4, 4, 7], [3, 9, 3])).toBe(31);
});

test("fixed tests", () => {
  expect(findDifference([15, 20, 25], [10, 30, 25])).toBe(0);
});
