const maxGap = require("./index");

test("fixed tests", () => {
  expect(maxGap([13, 10, 2, 9, 5])).toBe(4);
});

test("fixed tests", () => {
  expect(maxGap([13, 3, 5])).toBe(8);
});

test("fixed tests", () => {
  expect(maxGap([24, 299, 131, 14, 26, 25])).toBe(168);
});

test("fixed tests", () => {
  expect(maxGap([-3, -27, -4, -2])).toBe(23);
});

test("fixed tests", () => {
  expect(maxGap([-7, -42, -809, -14, -12])).toBe(767);
});

test("fixed tests", () => {
  expect(maxGap([12, -5, -7, 0, 290])).toBe(278);
});

test("fixed tests", () => {
  expect(maxGap([-54, 37, 0, 64, -15, 640, 0])).toBe(576);
});

test("fixed tests", () => {
  expect(maxGap([130, 30, 50])).toBe(80);
});

test("fixed tests", () => {
  expect(maxGap([1, 1, 1])).toBe(0);
});

test("fixed tests", () => {
  expect(maxGap([-1, -1, -1])).toBe(0);
});
