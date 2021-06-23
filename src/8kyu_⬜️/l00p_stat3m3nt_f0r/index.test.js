const pickIt = require("./index");

test("fixed tests", () => {
  expect(pickIt([1, 2])).toEqual([[1], [2]]);
});

test("fixed tests", () => {
  expect(pickIt([1, 2, 3])).toEqual([[1, 3], [2]]);
});

test("fixed tests", () => {
  expect(pickIt([3, 2, 1])).toEqual([[3, 1], [2]]);
});

test("fixed tests", () => {
  expect(pickIt([10, 20, 30])).toEqual([[], [10, 20, 30]]);
});

test("fixed tests", () => {
  expect(pickIt([11, 21, 31])).toEqual([[11, 21, 31], []]);
});

test("fixed tests", () => {
  expect(pickIt([8, 1, 5, 4, 6, 1, 1])).toEqual([
    [1, 5, 1, 1],
    [8, 4, 6],
  ]);
});
