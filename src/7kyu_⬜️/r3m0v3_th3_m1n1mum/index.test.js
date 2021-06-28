const removeSmallest = require("./index");

test("fixed tests", () => {
  expect(removeSmallest([1, 2, 3, 4, 5])).toEqual([2, 3, 4, 5]);
});

test("fixed tests", () => {
  expect(removeSmallest([5, 3, 2, 1, 4])).toEqual([5, 3, 2, 4]);
});

test("fixed tests", () => {
  expect(removeSmallest([2, 2, 1, 2, 1])).toEqual([2, 2, 2, 1]);
});

test("fixed tests", () => {
  expect(removeSmallest([])).toEqual([]);
});
