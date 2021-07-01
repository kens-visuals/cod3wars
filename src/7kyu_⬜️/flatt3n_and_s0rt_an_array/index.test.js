const flattenAndSort = require("./index");

test("fixed tests", () => {
  expect(flattenAndSort([])).toEqual([]);
});

test("fixed tests", () => {
  expect(flattenAndSort([[], []])).toEqual([]);
});

test("fixed tests", () => {
  expect(flattenAndSort([[], [1]])).toEqual([1]);
});

test("fixed tests", () => {
  expect(
    flattenAndSort([
      [3, 2, 1],
      [7, 9, 8],
      [6, 4, 5],
    ])
  ).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test("fixed tests", () => {
  expect(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]])).toEqual([
    1,
    2,
    3,
    4,
    5,
    6,
    100,
  ]);
});
