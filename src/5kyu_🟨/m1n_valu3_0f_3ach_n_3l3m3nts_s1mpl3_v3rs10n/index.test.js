const minValue = require("./index");

test("fixed tests", () => {
  expect(minValue([1, 2, 3, 10, -5], 2)).toEqual([1, 2, 3, -5]);
});

test("fixed tests", () => {
  expect(minValue([1, -2, 3, -4, 5, -6, 7, 8], 1)).toEqual([
    1,
    -2,
    3,
    -4,
    5,
    -6,
    7,
    8,
  ]);
});

test("fixed tests", () => {
  expect(minValue([1, -2, 3, -4, 5, -6, 7, 8], 2)).toEqual([
    -2,
    -2,
    -4,
    -4,
    -6,
    -6,
    7,
  ]);
});

test("fixed tests", () => {
  expect(minValue([1, -2, 3, -4, 5, -6, 7, 8], 3)).toEqual([
    -2,
    -4,
    -4,
    -6,
    -6,
    -6,
  ]);
});

test("fixed tests", () => {
  expect(minValue([1, -2, 3, -4, 5, -6, 7, 8], 4)).toEqual([
    -4,
    -4,
    -6,
    -6,
    -6,
  ]);
});
