const ranks = require("./index");

test("fixed tests", () => {
  expect(ranks([9, 3, 6, 10])).toEqual([2, 4, 3, 1]);
});

test("fixed tests", () => {
  expect(ranks([3, 3, 3, 3, 3, 5, 1])).toEqual([2, 2, 2, 2, 2, 1, 7]);
});
