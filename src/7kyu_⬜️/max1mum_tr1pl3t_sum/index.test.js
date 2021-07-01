const maxTriSum = require("./index");

test("fixed tests", () => {
  expect(maxTriSum([3, 2, 6, 8, 2, 3])).toBe(17);
});

test("fixed tests", () => {
  expect(maxTriSum([2, 9, 13, 10, 5, 2, 9, 5])).toBe(32);
});

test("fixed tests", () => {
  expect(maxTriSum([2, 1, 8, 0, 6, 4, 8, 6, 2, 4])).toBe(18);
});

test("fixed tests", () => {
  expect(maxTriSum([-3, -27, -4, -2, -27, -2])).toBe(-9);
});

test("fixed tests", () => {
  expect(maxTriSum([-14, -12, -7, -42, -809, -14, -12])).toBe(-33);
});

test("fixed tests", () => {
  expect(maxTriSum([-13, -50, 57, 13, 67, -13, 57, 108, 67])).toBe(232);
});

test("fixed tests", () => {
  expect(maxTriSum([-7, 12, -7, 29, -5, 0, -7, 0, 0, 29])).toBe(41);
});

test("fixed tests", () => {
  expect(maxTriSum([-2, 0, 2])).toBe(0);
});

test("fixed tests", () => {
  expect(maxTriSum([-2, -4, 0, -9, 2])).toBe(0);
});

test("fixed tests", () => {
  expect(maxTriSum([-5, -1, -9, 0, 2])).toBe(1);
});
