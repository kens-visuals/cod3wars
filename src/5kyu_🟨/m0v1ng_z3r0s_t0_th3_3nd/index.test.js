const moveZeros = require("./index");

test("fixed tests", () => {
  expect(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])).toEqual([
    1,
    2,
    1,
    1,
    3,
    1,
    0,
    0,
    0,
    0,
  ]);
});
