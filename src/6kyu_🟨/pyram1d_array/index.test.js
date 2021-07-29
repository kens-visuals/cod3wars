const pyramid = require("./index");

test("fixed tests", () => {
  expect(pyramid(0)).toEqual([]);
});

test("fixed tests", () => {
  expect(pyramid(1)).toEqual([[1]]);
});

test("fixed tests", () => {
  expect(pyramid(2)).toEqual([[1], [1, 1]]);
});

test("fixed tests", () => {
  expect(pyramid(3)).toEqual([[1], [1, 1], [1, 1, 1]]);
});
