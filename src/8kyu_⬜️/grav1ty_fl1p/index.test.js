const flip = require("./index");

test("fixed tests", () => {
  expect(flip("R", [3, 2, 1, 2])).toEqual([1, 2, 2, 3]);
});

test("fixed tests", () => {
  expect(flip("L", [1, 4, 5, 3, 5])).toEqual([5, 5, 4, 3, 1]);
});
