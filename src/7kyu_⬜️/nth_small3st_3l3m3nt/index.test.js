const nthSmallest = require("./index");

test("fixed tests", () => {
  expect(nthSmallest([3, 1, 2], 2)).toBe(2);
});

test("fixed tests", () => {
  expect(nthSmallest([15, 20, 7, 10, 4, 3], 3)).toBe(7);
});

test("fixed tests", () => {
  expect(nthSmallest([-5, -1, -6, -18], 4)).toBe(-1);
});

test("fixed tests", () => {
  expect(nthSmallest([-102, -16, -1, -2, -367, -9], 5)).toBe(-2);
});

test("fixed tests", () => {
  expect(nthSmallest([2, 169, 13, -5, 0, -1], 4)).toBe(2);
});
