const arrayDiff = require("./index");

test("fixed tests", () => {
  expect(arrayDiff([], [4, 5])).toEqual([]);
});

test("fixed tests", () => {
  expect(arrayDiff([3, 4], [3])).toEqual([4]);
});

test("fixed tests", () => {
  expect(arrayDiff([1, 8, 2], [])).toEqual([1, 8, 2]);
});

test("fixed tests", () => {
  expect(arrayDiff([1, 2, 3], [1, 2])).toEqual([3]);
});
