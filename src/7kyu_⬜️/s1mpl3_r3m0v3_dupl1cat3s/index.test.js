const solve = require("./index");

test("fixed tests", () => {
  expect(solve([3, 4, 4, 3, 6, 3])).toEqual([4, 6, 3]);
});

test("fixed tests", () => {
  expect(solve([1, 2, 1, 2, 1, 2, 3])).toEqual([1, 2, 3]);
});

test("fixed tests", () => {
  expect(solve([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
});

test("fixed tests", () => {
  expect(solve([1, 1, 4, 5, 1, 2, 1])).toEqual([4, 5, 2, 1]);
});

test("fixed tests", () => {
  expect(solve([1, 2, 1, 2, 1, 1, 3])).toEqual([2, 1, 3]);
});
