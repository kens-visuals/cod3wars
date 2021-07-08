const rankings = require("./index");

test("fixed tests", () => {
  expect(rankings([1, 3, 2])).toEqual([3, 1, 2]);
});

test("fixed tests", () => {
  expect(rankings([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
});

test("fixed tests", () => {
  expect(rankings([3, 4, 1, 2, 5])).toEqual([3, 2, 5, 4, 1]);
});

test("fixed tests", () => {
  expect(rankings([10, 20, 40, 50, 30])).toEqual([5, 4, 2, 1, 3]);
});

test("fixed tests", () => {
  expect(rankings([1, 10])).toEqual([2, 1]);
});

test("fixed tests", () => {
  expect(rankings([22, 33, 18, 9, 110, 4, 1, 88, 6, 50])).toEqual([
    5,
    4,
    6,
    7,
    1,
    9,
    10,
    2,
    8,
    3,
  ]);
});
