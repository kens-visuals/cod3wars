const sortArray = require("./index");

test("fixed tests", () => {
  expect(sortArray([5, 3, 2, 8, 1, 4])).toEqual([1, 3, 2, 8, 5, 4]);
});

test("fixed tests", () => {
  expect(sortArray([5, 3, 1, 8, 0])).toEqual([1, 3, 5, 8, 0]);
});

test("fixed tests", () => {
  expect([]).toEqual([]);
});
