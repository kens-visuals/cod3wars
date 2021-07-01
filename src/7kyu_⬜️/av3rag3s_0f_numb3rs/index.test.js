const averages = require("./index");

test("fixed tests", () => {
  expect(averages([2, 2, 2, 2, 2])).toEqual([2, 2, 2, 2]);
});

test("fixed tests", () => {
  expect(averages([2, -2, 2, -2, 2])).toEqual([0, 0, 0, 0]);
});

test("fixed tests", () => {
  expect(averages([1, 3, 5, 1, -10])).toEqual([2, 4, 3, -4.5]);
});
